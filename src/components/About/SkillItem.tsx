import React from "react";

interface SkillItemProps {
  name: string;
  imageSrc: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex column center-align skills-item small-margin-bottom">
      <img src={imageSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillItem;
