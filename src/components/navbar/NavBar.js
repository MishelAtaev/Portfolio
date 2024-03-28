import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.css";

// Navbar component with a prop set up to allow movement between different sections
const NavBar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">MATAEV</div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu />
      </div>
      <div className={`navbar-flex ${isMenuOpen ? "show" : ""}`}>
        <button onClick={() => onNavClick("hero")} className="navbar-item">
          HOME
        </button>
        <button onClick={() => onNavClick("about-me")} className="navbar-item">
          ABOUT ME
        </button>
        <button onClick={() => onNavClick("skills")} className="navbar-item">
          SKILLS
        </button>
        <button onClick={() => onNavClick("projects")} className="navbar-item">
          PROJECT
        </button>
        <button
          onClick={() => onNavClick("contact-me")}
          className="navbar-item"
        >
          CONTACT ME
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
