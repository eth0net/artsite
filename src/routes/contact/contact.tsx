import Image from "../../components/image";
import { artwork } from "../../images";
import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <title>Contact — Holly Rebecca Artwork</title>
      <meta
        name="description"
        content="Get in touch with Holly Rebecca about a coloured pencil pet portrait commission."
      />
      <Image
        {...artwork.cat_neeks}
        sizes="(max-width: 980px) calc(100vw - 2rem), 980px"
        priority
      />
      <h1>Contact</h1>
      <p>Holly Rebecca Thomas</p>
      <p>
        <a href="mailto:holly@hollyrebeccaartwork.co.uk">
          holly@hollyrebeccaartwork.co.uk
        </a>
      </p>
    </div>
  );
}

export default Contact;
