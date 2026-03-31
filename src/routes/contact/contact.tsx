import type { CarouselImage } from "../../components/carousel";
import "./contact.css";

const images: CarouselImage[] = [
  { alt: "Black and white cat", url: "/cat_neeks.jpg" },
];

function Contact() {
  return (
    <div id="contact">
      <img src={images[0].url} alt={images[0].alt} />
      <h1>Contact</h1>
      <p>Holly Rebecca Thomas</p>
      <a href="mailto:holly@hollyrebeccaartwork.co.uk">
        holly@hollyrebeccaartwork.co.uk
      </a>
    </div>
  );
}

export default Contact;
