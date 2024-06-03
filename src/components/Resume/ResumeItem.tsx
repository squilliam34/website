import React, { useState } from "react";

interface ResumeProps {
  position: string;
  timeline: string;
  company: string;
  description: string;
}

const ResumeItem: React.FC<ResumeProps> = ({
  position,
  timeline,
  company,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex">
        <div onClick={toggleDropdown} className="pointer">
          <span className="dropdown-icon navy">{isOpen ? "▾" : "▸"}</span>
        </div>
        <div className="flex resume-line">
          <div className="position">{position}</div>

          <div className="timeline">{timeline}</div>
        </div>
      </div>
      <div className="company">{company}</div>
      {isOpen && <div className="description">{description}</div>}
    </div>
  );
};

export default ResumeItem;
