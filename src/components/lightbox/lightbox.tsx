import {
  useEffect,
  useRef,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import type { Artwork } from "../../images";
import "./lightbox.css";

const SWIPE_THRESHOLD = 50;

export interface LightboxProps {
  images: Artwork[];
  /** Index of the image to show, or null when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const swipeFrom = useRef<number | null>(null);
  const open = index !== null;

  // showModal() gives us the top layer, focus trapping and Escape for free, but
  // it can only be driven imperatively.
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;

    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();

    document.body.classList.toggle("has-lightbox", open);
    return () => document.body.classList.remove("has-lightbox");
  }, [open]);

  function step(offset: number) {
    if (index === null) return;
    onIndexChange((index + offset + images.length) % images.length);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  }

  function handlePointerUp(event: PointerEvent) {
    const from = swipeFrom.current;
    swipeFrom.current = null;
    if (from === null) return;

    const dx = event.clientX - from;
    if (Math.abs(dx) > SWIPE_THRESHOLD) step(dx < 0 ? 1 : -1);
  }

  const current = index === null ? null : images[index];

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
    >
      {current && (
        <>
          <button
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <button
            className="lightbox-button lightbox-button-left"
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <figure
            className="lightbox-figure"
            onPointerDown={(event) => (swipeFrom.current = event.clientX)}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => (swipeFrom.current = null)}
          >
            <img
              src={current.img.src}
              srcSet={current.full}
              sizes="100vw"
              alt={current.alt}
              width={current.img.w}
              height={current.img.h}
            />
            <figcaption>{current.alt}</figcaption>
          </figure>
          <button
            className="lightbox-button lightbox-button-right"
            onClick={() => step(1)}
            aria-label="Next image"
          >
            <span aria-hidden="true">›</span>
          </button>
        </>
      )}
    </dialog>
  );
}

export default Lightbox;
