import "./about.css";
import aboutImg from "/holly.avif";

function About() {
  return (
    <div id="about">
      <div id="about-content">
        <div>
          <img src={aboutImg} alt="Holly Rebecca" style={{ width: "300px" }} />
        </div>
        <div>
          <h1>About Me</h1>
          <p>
            Hi, I’m Holly Rebecca, a coloured pencil pet portrait and wildlife
            artist based in Bishopstoke, Hampshire in the UK.
          </p>
          <p>
            I specialise in pet and animal portraits and aim to capture the life
            and soul of every individual I draw. My entire life, I have been
            passionate about animals, my pets, and art. In my teenage years I
            did digital art as a hobby and volunteered at an animal rescue
            centre in my spare time, and I later completed a MSci Zoology
            degree.
          </p>
          <p>
            I’m also the proud parent of several wonderful cats, who are my
            entire world, and I also keep several species of reptiles! Needless
            to say, I’m a little bit of a crazy animal lady!
          </p>
          <p>
            I truly understand the deep connection you have with your pets, and
            (having sadly lost my soul cat to unexpected heart failure when she
            wasn’t even 2 years old) how important a portrait is in capturing
            the life and soul of your beloved pet, and I pour my heart into
            every single piece, giving your pet the time and dedication they
            deserve.
          </p>
          <p>
            If you choose to commission a portrait from me, I will work with you
            to choose a suitable reference photo to work from in order to best
            capture your pet and their personality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
