import React from "react";
import SkillItem from "./SkillItem";

const skills1 = [
  { name: "C++", imageSrc: "images/cpp.png" },
  { name: "CSS", imageSrc: "images/css.png" },
  { name: "Git", imageSrc: "images/git.png" },
];

const skills2 = [
  { name: "HTML", imageSrc: "images/html.png" },
  { name: "Java", imageSrc: "images/java.png" },
  { name: "Javascript", imageSrc: "images/javascript.png" },
  { name: "Node.js", imageSrc: "images/nodejs.png" },
];

const skills3 = [
  { name: "Python", imageSrc: "images/python.png" },
  { name: "React", imageSrc: "images/react.png" },
  { name: "Typescript", imageSrc: "images/typescript.png" },
];

const TechnicalSkills: React.FC = () => {
  return (
    <div className="flex skills">
      <div>
        {skills1.map((skill, index) => (
          <SkillItem key={index} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>
      <div>
        {skills2.map((skill, index) => (
          <SkillItem key={index} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>
      <div>
        {skills3.map((skill, index) => (
          <SkillItem key={index} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
