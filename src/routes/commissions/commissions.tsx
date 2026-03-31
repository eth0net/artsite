import type { CarouselImage } from "../../components/carousel";
import "./commissions.css";

const images: CarouselImage[] = [
  { alt: "Eagle owl", url: "/owl_eagle.png" },
  { alt: "Black and white cat", url: "/cat_neeks.jpg" },
  { alt: "Barn owl", url: "/owl_barn.png" },
  { alt: "Cockapoo dog", url: "/dog_maisie.jpg" },
  { alt: "Black and white maine coon cat", url: "/cat_phoenix.jpg" },
  { alt: "Black cat", url: "/cat_pusscat.jpg" },
];

function Commissions() {
  return (
    <div id="commissions">
      <div>
        <h1>Commissions</h1>
        <p>
          <span>I am currently </span>
          <span style={{ color: "#7fa88b" }}>OPEN</span>
          <span> for commissions.</span>
        </p>
      </div>

      <div id="images-1">
        <img src={images[0].url} alt={images[0].alt} />
        <img src={images[1].url} alt={images[1].alt} />
        <img src={images[2].url} alt={images[2].alt} />
      </div>

      <div>
        <h2>How It Works</h2>

        <p>
          <b>Contact</b> - Contact me to book your slot. At this time we will
          discuss how many subjects and what size you would like. I will be able
          to give you a rough turnaround time at this stage based on how many
          pieces are ahead of yours. Please mention now if you need your artwork
          by a certain date (such as for a birthday). I take a 25% booking fee
          to secure your slot, the full balance is due when I start your piece.
        </p>
        <p>
          <b>Photos</b> - I will work with you to decide which photo of your
          beloved pet to work from to ensure the final product is something we
          will both be delighted with.
        </p>
        <p>
          <b>Drawing</b> - Once I'm ready to start working on your portrait, I
          will contact you for payment and to ensure you're still happy with the
          photo we chose. I will then start working on your portait and will
          contact you again with the final piece.
        </p>
        <p>
          <b>Shipping</b> - Postage throughout the UK is included in my prices,
          additional costs may apply when shipping overseas. Your final piece
          will be mounted and backed and sent to you in protective packaging
          ready for you to frame.
        </p>
      </div>

      <div>
        <h2>Prices</h2>

        <p>
          The prices listed below are based on one subject. All sizes listed are
          those of the paper and not the size of the drawing. All portraits come
          mounted and postage throughout the UK is included in this price. I am
          able to ship worldwide but there may be an additional cost for
          delivery.
        </p>
        <p>
          For more than one subject or for different sizes please contact me for
          a custom quote.
        </p>
      </div>

      <div className="prices">
        <div className="price-card">
          <h3>Small Portrait</h3>
          <p>8x6 inches</p>
          <p>£180</p>
        </div>
        <div className="price-card">
          <h3>Standard Portrait</h3>
          <p>10x7 inches</p>
          <p>£240</p>
        </div>
        <div className="price-card">
          <h3>Medium Portrait</h3>
          <p>12x10 inches</p>
          <p>£380</p>
        </div>
        <div className="price-card">
          <h3>Large Portrait</h3>
          <p>16x12 inches</p>
          <p>£600</p>
        </div>
      </div>

      <div id="images-2">
        <div>
          <img src={images[3].url} alt={images[3].alt} />
        </div>
        <div>
          <img src={images[4].url} alt={images[4].alt} />
        </div>
        <div>
          <img src={images[5].url} alt={images[5].alt} />
        </div>
      </div>

      <div>
        <h2>Book a Commission</h2>
        <p>
          <span>Please contact me at </span>
          <a href="mailto:holly@hollyrebeccaartwork.co.uk">
            holly@hollyrebeccaartwork.co.uk
          </a>
          <span> to book a commission.</span>
        </p>
        <p>
          Please include as much information about what you'd like to commission
          as possible (size, number of subjects, and who I'll be drawing). If
          you'd like a custom quote or if you have any other questions please
          don't hesitate to ask me. I aim to reply to all messages within 24
          hours, although usually a lot faster! Thank you for your interest in
          my artwork.
        </p>
      </div>
    </div>
  );
}

export default Commissions;
