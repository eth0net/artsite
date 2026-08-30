import { useRef, useState, type PointerEvent } from "react";
import type { Artwork } from "../../images";
import Image from "../image";
import "./carousel.css";

const SIDES = [1, 2, 3, 4];
const SWIPE_THRESHOLD = 40;

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const swipeFrom = useRef<number | null>(null);

  function at(offset: number) {
    return images[
      (((index + offset) % images.length) + images.length) % images.length
    ];
  }

  function step(offset: number) {
    setIndex((i) => (i + offset + images.length) % images.length);
  }

  function handlePointerDown(event: PointerEvent) {
    swipeFrom.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent) {
    const from = swipeFrom.current;
    swipeFrom.current = null;
    if (from === null) return;

    const dx = event.clientX - from;
    if (Math.abs(dx) > SWIPE_THRESHOLD) step(dx < 0 ? 1 : -1);
  }

  return (
    <div className="carousel">
      <button
        className="carousel-button carousel-button-left"
        onClick={() => step(-1)}
        aria-label="Previous image"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <div
        className="carousel-images-container"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (swipeFrom.current = null)}
      >
        <div
          className="carousel-images carousel-images-left"
          aria-hidden="true"
        >
          {SIDES.map((n) => (
            <Image key={n} {...at(-n)} alt="" sizes={SIDE_SIZES} />
          ))}
        </div>
        <div className="carousel-images carousel-images-center">
          <Image {...at(0)} sizes={CENTER_SIZES} priority />
        </div>
        <div
          className="carousel-images carousel-images-right"
          aria-hidden="true"
        >
          {SIDES.map((n) => (
            <Image key={n} {...at(n)} alt="" sizes={SIDE_SIZES} />
          ))}
        </div>
      </div>
      <button
        className="carousel-button carousel-button-right"
        onClick={() => step(1)}
        aria-label="Next image"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}

const CENTER_SIZES = "(max-width: 600px) 80vw, 480px";
const SIDE_SIZES = "240px";

export interface CarouselProps {
  images: Artwork[];
}

export default Carousel;
