import React from "react";
import ResumeItem from "./ResumeItem";

const Experiences: React.FC = () => {
  return (
    <div className="medium-margin-top margin-bottom">
      <h1>Work Experience</h1>
      <div className="flex column box">
        <div id="webster">
          <ResumeItem
            position="Private Banking Analyst Intern"
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
            description="Participated in and contributed to the daily operations of the firm: 
            - Attended meetings to discuss clients’ desired risk in their portfolio and determine their account distribution as well as aided fixed income calculations by calculating social security in Excel
            - Engaged with wholesalers and took notes on their various ETFs and their composition
            - Implemented a system to organize notes for hundreds of clients’ meetings, calls, reviews, and plans"
          />
        </div>
        <div id="spc" className="border">
          <ResumeItem
            position="Python Developer Intern"
            timeline="May 2023 - August 2023"
            company="Second Pillar Consulting"
            description="Collaborated in the development of climate change forecasts for financial institutions to conduct stress testing:
            - Wrote Python and Scala modules to implement technical indicators and metrics as described in published research
            - Ensured code was optimized for processing 30+ TBs of climate data
            - Used Sphinx module to write documentation to enhance code readability and usability
            - Implemented unit tests to ensure code is accurate"
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
      <h1 id="education">Education</h1>
      <div className="flex column box">
        <ResumeItem
          position="B.S. in Computer Science and Applied Math"
          timeline="August 2022 - May 2026"
          company="The College of William & Mary"
          description="I am pursing a Bachelor of Science, major in Computer Science/Applied Math
            
            Honors and Awards: Dean's List (Spring 2023), Best Finance Hack Runner-Up at TribeHacks IX
            
            Relevant Coursework: Multivariable Calculus, Linear Algebra, Data Structures, Algorithms, Software Development, Foundations of Math, Business Statistics, Principles of Accounting, Probability and Statistics for Scientists, Intro to Data Science
            
            Activities and Societies: Association of Computing Machinery, Club Tennis, Finance Academy, Sigma Chi Fraternity (Zeta Upsilon Chapter)"
        />
      </div>
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
    </div>
  );
};

export default Experiences;
