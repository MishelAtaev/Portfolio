import React from "react";
import "./Hero.css";
import OldPhoto from "../../images/OldPhoto.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="image-container-photo">
          <img src={OldPhoto} alt="Old Photo" className="profile-pic" />
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
