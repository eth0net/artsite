import { Link, NavLink } from "react-router";
import "./navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/commissions", label: "Commissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header id="navbar">
      <div id="navbar-content">
        <p id="navbar-title" className="navbar-section">
          <Link to="/">Holly Rebecca Artwork</Link>
        </p>
        <nav id="navbar-links" className="navbar-section" aria-label="Main">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
