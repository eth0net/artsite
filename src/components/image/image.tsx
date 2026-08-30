import type { Artwork } from "../../images";
import "./image.css";

export interface ImageProps extends Artwork {
  /** Rendered width at each breakpoint, so the browser can pick a srcset entry. */
  sizes: string;
  className?: string;
  /** Set on above-the-fold images; everything else lazy-loads. */
  priority?: boolean;
}

export function Image({
  sources,
  img,
  alt,
  sizes,
  className,
  priority,
}: ImageProps) {
  return (
    <picture>
      {Object.entries(sources).map(([format, srcSet]) => (
        <source
          key={format}
          type={`image/${format}`}
          srcSet={srcSet}
          sizes={sizes}
        />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}

export default Image;
