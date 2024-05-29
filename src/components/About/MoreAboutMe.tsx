import React from "react";
import Section from "./Section";

const info1 = {
  header1: "I love solving",
  header2: "problems",
  emoji: "🕵🏻‍♂️",
  paragraph:
    "That's what drew me to coding in the first place. From the tennis court to the classroom, finding solutions has always been my passion. I've come to love programming and all that comes with it, whether that's finding a bug, implementing Dijkstra's algorithm, or designing websites, and I can't wait to see where it takes me!",
};

const info2 = {
  header1: "Outside of",
  header2: "programming",
  emoji: "",
  paragraph:
    "I also enjoy learning about finance and economics and am interested in exploring the intersection of programming and those disciplines! On campus, I am involved in William and Mary's Finance Academy, Club Tennis, Association of Computing Machinery, and the Sigma Chi fraternity, where I serve on the executive board. When I'm not in front of my laptop, I enjoy reading, being active, and cooking.",
};

const MoreAboutMe: React.FC = () => {
  return (
    <div className="flex column margin-left margin-right">
      <Section
        header1={info1.header1}
        header2={info1.header2}
        emoji={info1.emoji}
        paragraph={info1.paragraph}
      />
      <Section
        header1={info2.header1}
        header2={info2.header2}
        emoji={info2.emoji}
        paragraph={info2.paragraph}
      />
    </div>
  );
};

export default MoreAboutMe;
