import React from "react";
import ResumeItem from "./ResumeItem";
import WorkExperiences from "./WorkExperiences";

const skills = [
  "Microsoft Office",
  "Python",
  "Java",
  "C",
  "C++",
  "R",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Node.Js",
  "React.js",
  "Express.js",
  "Data Structures",
  "Algorithms",
  "Investment Analysis",
  "Object Oriented Programming",
  "Software Development",
  "Web Development",
];

const Experiences: React.FC = () => {
  return (
    <div className="medium-margin-top margin-bottom">
      <WorkExperiences />
      <h1 id="leadership">Leadership Experience</h1>
      <div className="flex column box">
        <ResumeItem
          position="Magister"
          timeline="December 2023 - December 2024"
          company="Sigma Chi Fraternity"
          description="- Implemented Sigma Chi’s accredited hybrid new member education program
          - Directed weekly meetings, planned activities for new members, and led discussions to encourage values-based decision making
          - Mentored new members and provided guidance on balancing schoolwork and other responsibilities"
        />
      </div>
      <h1 id="technical">Technical Skills</h1>
      <div className="technical-container">
        {skills.map((skill, index) => (
          <div key={index} className="experience">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
