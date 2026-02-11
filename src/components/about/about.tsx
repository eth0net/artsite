import "./about.css";
import aboutImg from "/holly.avif";
import Carousel, { type CarouselImage } from "../carousel";

const images: CarouselImage[] = [
  { url: "/gallery/22bed2_329ab8b580364c8cb55cf56575a4a6e3~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_1a2ef10414f14ef2b2a5583f94e27cbc~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_cc419e3f2bac4c53bf997384f70ccbe8~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_53defd8a83bb477986cb73a6f72e5a47~mv2.avif", alt: "" },
  { url: "/gallery/400fa8_c5541257094547c68b779420bee9d964~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_7df0c756c26f4edd8fbef4e1d1ab926c~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_1ebb4ab97ab846bb8b4d6689e372ebec~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_f0b0f8fe408c4447a4afc3aae9632386~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_185a18e93d8f443991b23dc1fbb2fc07~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_1ae45553036f48388d9178294ed4af0b~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_f37d76bef1c549888af3b77f551435d7~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_e221ef61ffef4fcf92c2bfbac3a129ac~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_144bead2a4714f34bf2e66aab8da9c7c~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_62fb4a20f1874f2db67b0d5969f41a18~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_484c74bec7d740879d5f8e240015369a~mv2.avif", alt: "" },
  { url: "/gallery/22bed2_642527f69c14482fa013ece02ee28830~mv2.avif", alt: "" },
  { url: "/gallery/400fa8_a40d8f800752499ebef9631b6704024b~mv2.avif", alt: "" },
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
