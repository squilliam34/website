import React from "react";

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="list">
          <li className="inline">
            <a href="about.html" className="color-size active">
              About
            </a>
          </li>
          <li className="inline">
            <a href="resume.html" className="color-size">
              Resume
            </a>
          </li>
          <li className="inline">
            <a href="projects.html" className="color-size">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
