import React from "react";
import ResumeItem from "./ResumeItem";

const Experiences: React.FC = () => {
  return (
    <div className="medium-margin-top">
      <h1>Work Experiences</h1>
      <div className="flex column box">
        <div id="webster">
          <ResumeItem
            position="Private Banking Analyst"
            timeline="June 2024 - August 2024"
            company="Webster Bank"
            description="blah"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
