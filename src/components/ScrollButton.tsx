import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiChevronsDown } from "react-icons/fi";

const ScrollButton: React.FC = () => {
  return (
    <div className="flex center-align column">
      <ScrollLink to="about-me" smooth={true} duration={500} offset={-50}>
        About Me
      </ScrollLink>
      <FiChevronsDown size={20} className="text-gray-600" />
    </div>
  );
};

export default ScrollButton;
