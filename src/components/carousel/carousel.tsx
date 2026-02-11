import "./carousel.css";
import { useState } from "react";

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  function prev(n = 1) {
    return (index - n + images.length) % images.length;
  }

  function next(n = 1) {
    return (index + n) % images.length;
  }

  function handleClickNext() {
    setIndex(next());
  }

  function handleClickPrev() {
    setIndex(prev());
  }

  return (
    <>
      <div className="carousel">
        <button
          className="carousel-button carousel-button-left"
          onClick={handleClickPrev}
          aria-label="Previous image"
        >
          {"<"}
        </button>
        <div className="carousel-images-container">
          <div className="carousel-images carousel-images-left">
            <img src={images[prev(4)].url} alt={images[prev(4)].alt} />
            <img src={images[prev(3)].url} alt={images[prev(3)].alt} />
            <img src={images[prev(2)].url} alt={images[prev(2)].alt} />
            <img src={images[prev(1)].url} alt={images[prev(1)].alt} />
          </div>
          <div className="carousel-images carousel-images-center">
            <img src={images[index].url} alt={images[index].alt} />
          </div>
          <div className="carousel-images carousel-images-right">
            <img src={images[next(1)].url} alt={images[next(1)].alt} />
            <img src={images[next(2)].url} alt={images[next(2)].alt} />
            <img src={images[next(3)].url} alt={images[next(3)].alt} />
            <img src={images[next(4)].url} alt={images[next(4)].alt} />
          </div>
        </div>
        <button
          className="carousel-button carousel-button-right"
          onClick={handleClickNext}
          aria-label="Next image"
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export interface CarouselProps {
  images: CarouselImage[];
}

export interface CarouselImage {
  url: string;
  alt: string;
}

export default Carousel;
