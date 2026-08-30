import { useEffect, useRef } from "react";
import type { Artwork } from "../../images";
import Image from "../image";
import "./banner.css";

const SIZES = "(max-width: 900px) 50vw, 33vw";

export interface BannerProps {
  images: Artwork[];
  /** Drift speed in CSS pixels per second. */
  speed?: number;
}

/**
 * A continuously drifting strip of artwork. The list is rendered twice and the
 * scroll offset wraps at the halfway point, so the seam never shows.
 *
 * It drives a real scroll container rather than a transform, which means touch
 * dragging, momentum and the keyboard all work without any code of our own —
 * we just stop advancing while the visitor is interacting.
 */
export function Banner({ images, speed = 30 }: BannerProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const held = useRef(false);
  const paused = useRef(false);
  /** Momentum keeps scrolling after the finger lifts; let it finish first. */
  const resumeAt = useRef(0);

  useEffect(() => {
    const el = viewport.current;
    const strip = track.current;
    if (!el || !strip) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (still.matches) return;

    let frame = 0;
    let last = performance.now();
    let offset = 0;

    function tick(now: number) {
      frame = requestAnimationFrame(tick);
      const elapsed = (now - last) / 1000;
      last = now;
      if (!el || !strip) return;

      const half = strip.scrollWidth / 2;
      if (half <= 0) return;

      if (paused.current || held.current || now < resumeAt.current) {
        // The visitor has the wheel; just keep our bookkeeping in step.
        offset = el.scrollLeft;
        if (!held.current) offset = wrap(el, offset, half);
        return;
      }

      offset = wrap(el, offset + speed * elapsed, half);
      el.scrollLeft = offset;
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  function release() {
    held.current = false;
    resumeAt.current = performance.now() + 700;
  }

  return (
    <div
      className="banner"
      role="region"
      aria-label="Recent artwork"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
      onPointerDown={() => (held.current = true)}
      onPointerUp={release}
      onPointerCancel={release}
    >
      <div className="banner-viewport" ref={viewport} tabIndex={0}>
        <div className="banner-track" ref={track}>
          {images.map((image, i) => (
            <Image
              key={image.img.src}
              {...image}
              sizes={SIZES}
              priority={i < 3}
            />
          ))}
          <div className="banner-repeat" aria-hidden="true">
            {images.map((image) => (
              <Image key={image.img.src} {...image} alt="" sizes={SIZES} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Keep the offset inside the first copy of the strip. */
function wrap(el: HTMLDivElement, offset: number, half: number) {
  if (offset >= half) {
    const next = offset - half;
    el.scrollLeft = next;
    return next;
  }
  if (offset < 0) {
    const next = offset + half;
    el.scrollLeft = next;
    return next;
  }
  return offset;
}

export default Banner;
