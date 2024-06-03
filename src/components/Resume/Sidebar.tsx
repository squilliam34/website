import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <Link to="webster" smooth="true" duration={500} offset={-150}>
              Private Banking Analyst Intern @ Webster Bank
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="dominguez" smooth="true" duration={500} offset={-150}>
              Office Intern @ Dominguez Wealth Management
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="spc" smooth="true" duration={500} offset={-150}>
              Python Developer Intern @ Second Pillar Consulting
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="mntc" smooth="true" duration={500} offset={-150}>
              Front Desk Attendant & Teaching Assistant @ McCormack-Nagelsen
              Tennis Center
            </Link>
          </li>
        </div>
      )}
      <Link
        to="education"
        smooth="true"
        duration={500}
        offset={-150}
        className="link"
      >
        Education
      </Link>
      <Link
        to="leadership"
        smooth="true"
        duration={500}
        offset={-150}
        className="link"
      >
        Leadership Experience
      </Link>
      <Link
        to="technical"
        smooth="true"
        duration={500}
        offset={-150}
        className="link"
      >
        Technical Skills
      </Link>
    </div>
  );
};

export default Sidebar;
