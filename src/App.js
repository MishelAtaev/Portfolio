import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/about me/AboutMe";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <AboutMe /> 
        <Skills />
    </>
  );
};

export default App;
