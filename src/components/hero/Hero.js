import React from "react";
import "./Hero.css";

const Hero = ({imgSrc }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="image-container-photo">
          <img src={imgSrc} alt="Profile" className="profile-pic" />
        </div>
        <h1>MISHEL ATAEV</h1>
        <div className="text-container">
          <p className="hero-text">
            With a solid grounding in QA Analysis, I'm eagerly journeying into
            the realm of Full-Stack Web Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
