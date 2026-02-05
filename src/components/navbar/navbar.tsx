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
            <a>Home</a>
            <a>Commissions</a>
            <a>Gallery</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
