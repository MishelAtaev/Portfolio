import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/about me/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact me/ContactMe";

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <AboutMe /> 
        <Skills />
        <Projects />
        <ContactMe />
    </>
  );
};

export default App;
