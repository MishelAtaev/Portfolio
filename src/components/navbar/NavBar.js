import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MATAEV</div>
      <div className="navbar-flex">
        <a href="#home" className="navbar-item">HOME</a>
        <a href="#about" className="navbar-item">ABOUT ME</a>
        <a href="#projects" className="navbar-item">PROJECT</a>
        <a href="#contact" className="navbar-item">CONTACT ME</a>
      </div>
    </nav>
  );
}

export default NavBar;
