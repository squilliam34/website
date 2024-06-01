import React, { useState } from "react";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex column sidebar">
      <img src="images/profile.jpg" className="photo margin-top" />
      <div className="margin-top navy">Will Fan</div>
      <div className="navy">Williamsburg, VA</div>
      <div className="margin-top">
        <div>
          <IoIosMail /> wdfan0128@gmail.com
        </div>
        <div>
          <FaPhone /> (757) 775-3185
        </div>
      </div>

      <div
        onClick={toggleDropdown}
        className="margin-top tennis-yellow dropdown"
      >
        Work Experience
      </div>
      {isOpen && (
        <div className="dropdown_menu">
          <li className="dropdown-item">
            <a href="#webster">Private Banking Analyst @ Webster Bank</a>
          </li>
          <li className="dropdown-item">
            <a href="#dominguez">Office Intern @ Dominguez Wealth Management</a>
          </li>
          <li className="dropdown-item">
            <a href="#spc">
              Python Developer Intern @ Second Pillar Consulting
            </a>
          </li>
          <li className="dropdown-item">
            <a href="#mntc">
              Teaching Assistant & Front Desk Attendant @ McCormack-Nagelsen
              Tennis Center
            </a>
          </li>
        </div>
      )}
      <div className="link" onClick={() => scrollToSection("education")}>
        Education
      </div>
      <div className="link" onClick={() => scrollToSection("leadership")}>
        Leadership Experience
      </div>
      <div className="link" onClick={() => scrollToSection("technical")}>
        Technical Skills
      </div>
    </div>
  );
};

export default Sidebar;
