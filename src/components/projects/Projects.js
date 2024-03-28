import React, { useState, useEffect } from "react";
import { projectsData } from "./projectsData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextProject, 100000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPreviousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section key={currentIndex}>
      <div className="project-display">
        <h2 className="project-title">{currentProject.title}</h2>
      </div>
      <div className="projects-container">
        <button onClick={goToPreviousProject}>
          <FaArrowLeft />
        </button>
        <div>
          <img
            className="project-image"
            src={currentProject.imageUrl}
            alt={currentProject.title}
          />
          <p className="project-description">{currentProject.description}</p>
        </div>
        <button onClick={goToNextProject}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
