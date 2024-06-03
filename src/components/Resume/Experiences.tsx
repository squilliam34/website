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
            timeline="June 2023 - August 2023"
            company="Dominguez Wealth Management"
            description="Participated in and contributed to the daily operations of the firm - Attended meetings to discuss clients’ desired risk in their portfolio and determine their account distribution as well as aided fixed income calculations by calculating social security in Excel, engaged with wholesalers and took notes on their various ETFs and their composition, implemented a system to organize notes for hundreds of clients’ meetings, calls, reviews, and plans"
          />
        </div>
        <div id="spc" className="border">
          <ResumeItem
            position="Python Developer Intern"
            timeline="May 2023 - August 2023"
            company="Second Pillar Consulting"
            description="Collaborated in the development of climate change forecasts for financial institutions to conduct stress testing - Wrote Python and Scala modules to implement technical indicators and metrics as described in published research, ensured code was optimized for processing 30+ TBs of climate data, used Sphinx module to write documentation to enhance code readability and usability, implemented unit tests to ensure code is accurate"
          />
        </div>
        <div id="mntc" className="border">
          <ResumeItem
            position="Teaching Assistant & Front Desk Attendant"
            timeline="June 2022 - Present"
            company="McCormack-Nagelsen Tennis Center"
            description="Develop tailored lesson plans and collaborate with fellow teaching pros to instruct students across a broad range of skill sets and ages. Verify transactions, process payments, and update member information to ensure accuracy in the center’s financial reporting and information databases"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
