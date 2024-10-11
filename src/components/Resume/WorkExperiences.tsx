import React from "react";
import ResumeItem from "./ResumeItem";

const WorkExperiences: React.FC = () => {
  return (
    <div>
      <h1 id="header">Work Experience</h1>
      <div className="flex column box">
        <div id="webster">
          <ResumeItem
            position="Private Banking Summer Analyst"
            timeline="June 2024 - August 2024"
            company="Webster Bank"
            description="- Assessed macroeconomic trends to inform strategic asset allocation, optimizing portfolios according to clients' long-term financial goals and risk profiles
            - Conducted portfolio analysis for portfolio managers to determine deviation from models and the S&P 500
            - Performed in-depth research on securities and tailored recommendations based on client-specific requirements for income generation and appetite for risk"
          />
        </div>
        <div id="dominguez" className="border">
          <ResumeItem
            position="Wealth Management Intern"
            timeline="June 2023 - August 2023"
            company="Dominguez Wealth Management"
            description="- Participated in client meetings to assess risk tolerance and determine portfolio allocation
            - Aided in fixed income strategies by calculating Social Security projections in Excel
            - Engaged with wholesalers and gathered insights on various ETF’s and their composition, which helped to inform investment decisions and client recommendations"
          />
        </div>
        <div id="spc" className="border">
          <ResumeItem
            position="Python Developer Intern"
            timeline="May 2023 - August 2023"
            company="Second Pillar Consulting"
            description="- Wrote Python and Scala modules to implement technical indicators and metrics as described in published research to aid in the development of climate change forecasts for financial institutions to conduct stress testing
            - Ensured code was optimized for processing 30+ TBs of climate data and implemented unit tests to ensure code is accurate
            - Used Sphinx module to write documentation to enhance code readability and usability"
          />
        </div>
        <div id="mntc" className="border">
          <ResumeItem
            position="Teaching Assistant & Front Desk Attendant"
            timeline="June 2022 - Present"
            company="McCormack-Nagelsen Tennis Center"
            description="- Develop tailored lesson plans and collaborate with fellow teaching pros to instruct students across a broad range of skill sets and ages
            - Verify transactions, process payments, and update member information to ensure accuracy in the center’s financial reporting and information databases"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
