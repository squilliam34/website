import React from "react";
import ResumeItem from "./ResumeItem";
import WorkExperiences from "./WorkExperiences";

const skills = [
  "Microsoft Office",
  "Python",
  "Java",
  "C++",
  "R",
  "Javascript",
  "React",
  "Typescript",
  "HTML",
  "CSS",
  "Node.Js",
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
          timeline="January 2024 - Present"
          company="Sigma Chi Fraternity"
          description="Implement Sigma Chi’s accredited hybrid new member education program:
        - Plan weekly meetings to present on fraternity and chapter history and ritual
        - Encourage values-based decision making to new members through weekly activities and discussions
        - Act as a mentor for new members by providing guidance in balancing schoolwork and other
        responsibilities
        Lead conflict resolution between new members as a mediator for disputes"
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
