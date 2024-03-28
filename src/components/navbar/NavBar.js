import React from 'react';
import './NavBar.css'; 

const NavBar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MATAEV</div>
      <div className="navbar-flex">
        <button onClick={() => onNavClick('hero')} className="navbar-item">HOME</button>
        <button onClick={() => onNavClick('about-me')} className="navbar-item">ABOUT ME</button>
        <button onClick={() => onNavClick('skills')} className="navbar-item">SKILLS</button>
        <button onClick={() => onNavClick('projects')} className="navbar-item">PROJECT</button>
        <button onClick={() => onNavClick('contact-me')} className="navbar-item">CONTACT ME</button>
      </div>
    </nav>
  );
}

export default NavBar;
