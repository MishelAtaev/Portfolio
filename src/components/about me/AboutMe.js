import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-text">
        <h2 className="h2-about-me">ABOUT ME</h2>
      </div>
      <div className="about-me-content">
        <p className="about-me-greeting">
          Greetings! I'm Mishel Ataev, a Full Stack Web Developer navigating my
          way from a QA Analyst towards becoming a full-stack development.
          Always interested in improving my skills and hammering down my craft.
        </p>
        <p className="about-me-hobby">
          When I am not coding, you'll generally find me playing video games or
          experiencing the storytelling art of anime and manga.
        </p>
        <p className="about-me-experience">
          With a foundation in HTML, CSS, JavaScript, React, Node.js, MongoDB,
          and Express, I am dedicated to refining my craft and expanding my
          expertise in these technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;