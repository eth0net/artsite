import { Link } from "react-router";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div id="navbar-content">
          <div id="navbar-title" className="navbar-section">
            <h1>Holly Rebecca Artwork</h1>
          </div>
          <div id="navbar-links" className="navbar-section">
            <Link to="/">Home</Link>
            <Link to="/commissions">Commissions</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
