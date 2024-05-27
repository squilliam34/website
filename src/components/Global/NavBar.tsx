import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="list">
          <li className="inline">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "color-size active" : "color-size"
              }
            >
              About
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "color-size active" : "color-size"
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "color-size active" : "color-size"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
