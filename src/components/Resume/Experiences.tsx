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
        <div id="dominguez" className="border">
          <ResumeItem
            position="Office Intern"
            timeline="June 2023-August 2023"
            company="Dominguez Wealth Management"
            description="Participated in and contributed to the daily operations of the firm - Attended meetings to discuss clients’ desired risk in their portfolio and determine their account distribution as well as aided fixed income calculations by calculating social security in Excel, engaged with wholesalers and took notes on their various ETFs and their composition, implemented a system to organize notes for hundreds of clients’ meetings, calls, reviews, and plans"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
