import React, { useState, useEffect } from "react";
import { projectsData } from "./projectsData";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextProject, 10000000000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPreviousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectsData[currentIndex];
  const descriptionParagraphs = currentProject.description
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} className="project-description">
        {paragraph}
      </p>
    ));

  return (
    <section key={currentIndex} className="project-section">
      <div className="projects">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        <button className="arrow up" onClick={goToPreviousProject}>
          <FaArrowUp />
        </button>
        <div className="project-details">
          <h3 className="project-title">{currentProject.title}</h3>
          <div className="image-wrapper">
            <img
              className="project-image"
              src={currentProject.imageUrl}
              alt={currentProject.title}
            />
          </div>
        </div>
        <div className="project-description-container">
          {descriptionParagraphs}
        </div>
        <button className="arrow down" onClick={goToNextProject}>
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Projects;
