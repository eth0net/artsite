import Carousel, { type CarouselImage } from "../../components/carousel";
import "./about.css";
import aboutImg from "/holly_grass.jpg";

const images: CarouselImage[] = [
  { alt: "Rhino mother and baby", url: "/hope.png" },
  { alt: "Cockapoo dog", url: "/dog_maisie.jpg" },
  { alt: "Black and white cat", url: "/cat_neeks.jpg" },
  { alt: "Black cat", url: "/cat_pusscat.jpg" },
  { alt: "Red panda", url: "/seeing_red.jpg" },
  { alt: "Tigers in a pool", url: "/reflective_beauty.png" },
  { alt: "Eagle owl", url: "/owl_eagle.png" },
  { alt: "Sausage dog", url: "/dog_sausage.jpg" },
  { alt: "Black and white maine coon cat", url: "/cat_phoenix.jpg" },
  { alt: "Boxer dog", url: "/dog_max.jpg" },
  { alt: "Tabby cat with white", url: "/cat_tabby_white.jpg" },
  { alt: "Tawny owl", url: "/owl_tawny.png" },
  { alt: "Barn owl", url: "/owl_barn.png" },
  { alt: "Little owl", url: "/owl_little.png" },
  { alt: "Snowy owl", url: "/owl_snowy.png" },
  { alt: "Silver maine coon cat", url: "/cat_mitzi.jpg" },
  { alt: "Lynx", url: "/lynx.jpg" },
];

function About() {
  return (
    <div id="about">
      <div id="about-gallery">
        <Carousel images={images} />
      </div>
      <div id="about-content">
        <div id="about-bio">
          <div>
            <img
              src={aboutImg}
              alt="Holly Rebecca"
              style={{ width: "300px" }}
            />
          </div>
          <div>
            <h1>About Me</h1>
            <p>
              Hi, I’m Holly Rebecca, a coloured pencil pet portrait and wildlife
              artist based in Bishopstoke, Hampshire in the UK.
            </p>
            <p>
              I specialise in pet and animal portraits and aim to capture the
              life and soul of every individual I draw. My entire life, I have
              been passionate about animals, my pets, and art. In my teenage
              years I did digital art as a hobby and volunteered at an animal
              rescue centre in my spare time, and I later completed a MSci
              Zoology degree.
            </p>
            <p>
              I’m also the proud parent of several wonderful cats, who are my
              entire world, and I also keep several species of reptiles!
              Needless to say, I’m a little bit of a crazy animal lady!
            </p>
            <p>
              I truly understand the deep connection you have with your pets,
              and (having sadly lost my soul cat to unexpected heart failure
              when she wasn’t even 2 years old) how important a portrait is in
              capturing the life and soul of your beloved pet, and I pour my
              heart into every single piece, giving your pet the time and
              dedication they deserve.
            </p>
            <p>
              If you choose to commission a portrait from me, I will work with
              you to choose a suitable reference photo to work from in order to
              best capture your pet and their personality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
