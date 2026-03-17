import type { CarouselImage } from "../../components/carousel";
import "./gallery.css";

const images: CarouselImage[] = [
  { alt: "Silver maine coon cat", url: "/cat_mitzi.jpg" },
  { alt: "Lynx", url: "/lynx.jpg" },
  { alt: "Sausage dog", url: "/dog_sausage.jpg" },
  { alt: "Bilbo the cat", url: "/cat_bilbo.jpg" },
  { alt: "Tigers in a pool", url: "/reflective_beauty.png" },
  { alt: "Rhino mother and baby", url: "/hope.png" },
  { alt: "Ocelot", url: "/ocelot.jpg" },
  { alt: "Boxer dog", url: "/dog_max.jpg" },
  { alt: "Black and white cat", url: "/cat_neeks.jpg" },
  { alt: "Tabby cat with white", url: "/cat_tabby_white.jpg" },
  { alt: "Zebras", url: "/zebras.jpg" },
  { alt: "Marcie dog", url: "/dog_marcie.jpg" },
  { alt: "Red panda", url: "/seeing_red.jpg" },
  { alt: "Cockapoo dog", url: "/dog_maisie.jpg" },
  { alt: "Tawny owl", url: "/owl_tawny.png" },
  { alt: "Snowy owl", url: "/owl_snowy.png" },
  { alt: "Ural owl", url: "/owl_ural.png" },
  { alt: "Little owl", url: "/owl_little.png" },
  { alt: "Eagle owl", url: "/owl_eagle.png" },
  { alt: "Barn owl", url: "/owl_barn.png" },
  { alt: "Black cat", url: "/cat_pusscat.jpg" },
  { alt: "Black and white maine coon cat", url: "/cat_phoenix.jpg" },
];

function Gallery() {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div className="gallery-images">
        <div>
          <img src={images[0].url} alt={images[0].alt} />
          <img src={images[1].url} alt={images[1].alt} />
          <img src={images[2].url} alt={images[2].alt} />
        </div>
        <div>
          <img src={images[3].url} alt={images[3].alt} />
          <img src={images[4].url} alt={images[4].alt} />
        </div>
        <div>
          <img src={images[5].url} alt={images[5].alt} />
          <img src={images[6].url} alt={images[6].alt} />
        </div>
        <div>
          <img src={images[7].url} alt={images[7].alt} />
          <img src={images[8].url} alt={images[8].alt} />
          <img src={images[9].url} alt={images[9].alt} />
        </div>
        <div>
          <img src={images[10].url} alt={images[10].alt} />
          <img src={images[11].url} alt={images[11].alt} />
          <img src={images[12].url} alt={images[12].alt} />
        </div>
        <div>
          <img src={images[13].url} alt={images[13].alt} />
          <img src={images[14].url} alt={images[14].alt} />
          <img src={images[15].url} alt={images[15].alt} />
        </div>
        <div>
          <img src={images[16].url} alt={images[16].alt} />
          <img src={images[17].url} alt={images[17].alt} />
          <img src={images[18].url} alt={images[18].alt} />
        </div>
        <div>
          <img src={images[19].url} alt={images[19].alt} />
          <img src={images[20].url} alt={images[20].alt} />
          <img src={images[21].url} alt={images[21].alt} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
