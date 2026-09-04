import { useState } from "react";
import logo from "../assets/logo-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
     <div className="logo">
  <img
    src={logo}
    alt="V PLAN Interiors & Contracting"
    className="logo-image"
  />
</div>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      {/* CTA */}
      <a href="#contact" className="nav-cta">
        Let's connect <span>↗</span>
      </a>

      {/* Mobile Menu */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;