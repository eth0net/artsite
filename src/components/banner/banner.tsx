import { useEffect, useRef } from "react";
import type { Artwork } from "../../images";
import Image from "../image";
import "./banner.css";

const SIZES = "(max-width: 900px) 50vw, 33vw";
/** How long the strip stays still after the visitor last moved it. */
const IDLE_MS = 3000;
/** Three, so a manual scroll has a whole copy of runway in either direction. */
const COPIES = 3;

export interface BannerProps {
  images: Artwork[];
  /** Drift speed in CSS pixels per second. */
  speed?: number;
}

/**
 * A drifting strip of artwork, rendered in identical copies so the offset can
 * wrap by exactly one without a seam. Drives a real scroll container rather
 * than a transform, so touch, momentum and the keyboard work on their own.
 */
export function Banner({ images, speed = 30 }: BannerProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const held = useRef(false);
  const hovered = useRef(false);
  const resumeAt = useRef(0);

  useEffect(() => {
    const el = viewport.current;
    const strip = track.current;
    if (!el || !strip) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = performance.now();
    let offset = 0;
    // What we last wrote, so a scroll we did not cause is recognisable.
    let written = 0;
    let period = 0;
    let placed = false;
    let wasIdle = true;

    // Distance from one copy of a piece to the next. Measured rather than
    // derived, so the gap between images cannot throw the seam out.
    function measure() {
      const items = strip!.querySelectorAll("img");
      period =
        items.length > images.length
          ? items[images.length].offsetLeft - items[0].offsetLeft
          : 0;

      // Start in the middle copy, so there is runway in both directions.
      if (!placed && period > 0) {
        placed = true;
        offset = period;
        el!.scrollLeft = offset;
        written = el!.scrollLeft;
      }
    }

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(strip);

    function tick(now: number) {
      frame = requestAnimationFrame(tick);
      // Clamp, or returning to a backgrounded tab lurches the strip forward.
      const elapsed = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!el || period <= 0) return;

      const actual = el.scrollLeft;
      // Catches touch, wheel, keyboard and scrollbar alike; pointer events do
      // not. The margin absorbs the browser rounding our own writes.
      const moved = Math.abs(actual - written) > 1;
      if (moved) resumeAt.current = now + IDLE_MS;

      const idle = held.current || hovered.current || now < resumeAt.current;
      // Not driving means the DOM is the truth, first frame back included, or a
      // flick's sub-pixel tail is dropped and it snaps. Drifting stays fractional.
      if (idle || wasIdle) offset = actual;
      wasIdle = idle;

      if (idle) {
        // Writing scrollLeft mid-flick kills momentum, so step only near the ends.
        if (moved && rescue()) {
          el.scrollLeft = offset;
        }
        written = el.scrollLeft;
        return;
      }

      // Drift only moves right; a lower wrap would yank it after a manual scroll.
      offset += speed * elapsed;
      if (offset >= period * 2) offset -= period;
      el.scrollLeft = offset;
      written = el.scrollLeft;
    }

    /** Step a whole copy when a manual scroll nears either end. */
    function rescue() {
      if (offset > period * 2.4) {
        offset -= period;
        return true;
      }
      if (offset < period * 0.6) {
        offset += period;
        return true;
      }
      return false;
    }

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
    };
  }, [speed, images.length]);

  return (
    <div
      className="banner"
      role="region"
      aria-label="Recent artwork"
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
      onFocusCapture={() => (hovered.current = true)}
      onBlurCapture={() => (hovered.current = false)}
      // Only a finger resting still; a drag is caught by the scroll check.
      onPointerDown={() => (held.current = true)}
      onPointerUp={() => (held.current = false)}
      onPointerCancel={() => (held.current = false)}
    >
      <div className="banner-viewport" ref={viewport} tabIndex={0}>
        <div className="banner-track" ref={track}>
          {Array.from({ length: COPIES }, () => images)
            .flat()
            .map((image, i) => (
              <Image
                key={i}
                {...image}
                alt={i < images.length ? image.alt : ""}
                sizes={SIZES}
                priority={i < 3}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
