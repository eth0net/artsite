import Image from "../../components/image";
import { artworks } from "../../images";
import "./commissions.css";

const banner = artworks("owl_eagle", "cat_neeks", "owl_barn");
const [feature, ...alongside] = artworks(
  "dog_maisie",
  "cat_phoenix",
  "cat_pusscat",
);

const prices = [
  { name: "Small Portrait", size: "8x6 inches", price: "£180" },
  { name: "Standard Portrait", size: "10x7 inches", price: "£240" },
  { name: "Medium Portrait", size: "12x10 inches", price: "£380" },
  { name: "Large Portrait", size: "16x12 inches", price: "£600" },
];

const BANNER_SIZES = "(max-width: 700px) 37vw, 420px";
const FEATURE_SIZES = "(max-width: 700px) calc(100vw - 2rem), 480px";

function Commissions() {
  return (
    <div id="commissions">
      <title>Commissions — Holly Rebecca Artwork</title>
      <meta
        name="description"
        content="Commission a coloured pencil portrait of your pet. Prices from £180, mounted, with UK postage included."
      />
      <div>
        <h1>Commissions</h1>
        <p>
          <span>I am currently </span>
          <strong className="status-open">OPEN</strong>
          <span> for commissions.</span>
        </p>
      </div>

      <div id="images-1">
        {banner.map((image) => (
          <Image key={image.img.src} {...image} sizes={BANNER_SIZES} />
        ))}
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
        {prices.map(({ name, size, price }) => (
          <div className="price-card" key={name}>
            <h3>{name}</h3>
            <p>{size}</p>
            <p>{price}</p>
          </div>
        ))}
      </div>

      <div id="images-2">
        <div>
          <Image {...feature} sizes={FEATURE_SIZES} />
        </div>
        {alongside.map((image) => (
          <div key={image.img.src}>
            <Image {...image} sizes={FEATURE_SIZES} />
          </div>
        ))}
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
