import React from "react";
import Section from "./Section";

const info = {header1 : "I love solving", header2: "problems", emoji:"🕵🏻‍♂️", paragraph:"That's what drew me to coding in the first place. From the tennis court to the classroom, finding solutions has always been my passion. I've come to love programming and all that comes with it, whether that's finding a bug, implementing Dijkstra's algorithm, or designing websites, and I can't wait to see where it takes me!"};

const MoreAboutMe: React.FC = () => {
  return (
    <div className="margin-left margin-right">
      <Section header1={info.header1} header2={info.header2} emoji={info.emoji} paragraph={info.paragraph}/>
    </div>
  );
};

export default MoreAboutMe;
