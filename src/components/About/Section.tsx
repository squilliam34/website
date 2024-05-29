import React from "react";

interface ParagraphProps {
  header1: string;
  header2: string;
  emoji: string;
  paragraph: string;
}

const Section: React.FC<ParagraphProps> = ({
  header1,
  header2,
  emoji,
  paragraph,
}) => {
  return (
    <div className="header">
      <h1 className="medium-font">
        {header1} <span className="tennis-yellow">{header2}</span>
        {emoji}
      </h1>
      <p className="line-height">{paragraph}</p>
    </div>
  );
};

export default Section;
