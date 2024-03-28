import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/about me/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact me/ContactMe";
import OldPhoto from "./images/OldPhoto.jpg";

const App = () => {
  // on click function to allow scrolling between different sections, adjusted 3 sections as clicking would scroll too far down / up
  const handleNavClick = (sectionId) => {
    const offset = 200;
    const section = document.getElementById(sectionId);
    if (section) {
      const position =
        section.offsetTop -
        (sectionId === "about-me" ||
        sectionId === "projects" ||
        sectionId === "skills"
          ? offset
          : 0);
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} />
      <Hero imgSrc={OldPhoto} />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
};

export default App;
