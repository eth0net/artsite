import Image from "../../components/image";
import { artworks } from "../../images";
import "./gallery.css";

const images = artworks(
  "cat_mitzi",
  "lynx",
  "dog_sausage",
  "cat_bilbo",
  "reflective_beauty",
  "hope",
  "ocelot",
  "dog_max",
  "cat_neeks",
  "cat_tabby_white",
  "zebras",
  "dog_marcie",
  "seeing_red",
  "dog_maisie",
  "owl_tawny",
  "owl_snowy",
  "owl_ural",
  "owl_little",
  "owl_eagle",
  "owl_barn",
  "cat_pusscat",
  "cat_phoenix",
);

const SIZES =
  "(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) 45vw, 340px";

function Gallery() {
  return (
    <div id="gallery">
      <title>Gallery — Holly Rebecca Artwork</title>
      <meta
        name="description"
        content="A gallery of coloured pencil pet portraits and wildlife drawings by Holly Rebecca."
      />
      <h1>Gallery</h1>
      <div className="gallery-images">
        {images.map((image) => (
          <Image key={image.img.src} {...image} sizes={SIZES} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
