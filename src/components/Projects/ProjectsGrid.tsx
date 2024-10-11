import React from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Stock Screener (in progress)",
    image: "/images/screener.png",
    description:
      "A full stack project to screen stocks using various filters. Built using React, Express, and PostgreSQL",
    github: "https://github.com/squilliam34/full-stack-stock-screener",
  },
  {
    id: 2,
    title: "Hackathon Project",
    image: "/images/tribehacks.png",
    description:
      "A hackathon project I built in 24 hours that uses web scraping to get stock prices and financials in order to predict prices using a regression. Made in Python",
    github: "https://github.com/squilliam34/TribeHacks-2024-Project",
  },
  {
    id: 3,
    title: "GUI Connect 4 Game",
    image: "/images/gameplay.png",
    description:
      "The final project for my software development class that was a Connect 4 game. Made in Java",
    github: "https://github.com/squilliam34/GUIConnectN",
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.github}
          className="project-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <div className="description-box">
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsGrid;
