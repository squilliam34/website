import React from "react";

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
    image: "/images/bull.jpg",
    description:
      "A full stack project to screen stocks using various filters. Built using React, Express, and PostgreSQL",
    github: "https://github.com/squilliam34/full-stack-stock-screener",
  },
  {
    id: 2,
    title: "Intro to Machine Learning Final Project",
    image: "/images/ml.png",
    description: "The final project for my intro to machine learning class. I trained various models (neural networks, linear regression, AdaBoost) to predict the price of a house given certain features",
    github: "https://github.com/squilliam34/CS416-Final-Project/tree/main",
  },
  {
    id: 3,
    title: "Hackathon Project",
    image: "/images/hackathon.jpg",
    description:
      "A hackathon project I built in 24 hours that uses web scraping to get stock prices and financials in order to predict prices using a regression. Made in Python",
    github: "https://github.com/squilliam34/TribeHacks-2024-Project",
  },
  {
    id: 4,
    title: "GUI Connect 4 Game",
    image: "/images/connect4.jpg",
    description:
      "The final project for my software development class that was a Connect 4 game. Made in Java",
    github: "https://github.com/squilliam34/GUIConnectN",
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <div id="header" className="projects-grid">
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
