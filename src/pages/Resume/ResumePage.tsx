import React from "react";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scroll.css";
import "../../css/sidebar.css";
import "../../css/resume.css";

import { Sidebar, Experiences } from "../../components/Resume";

const ResumePage: React.FC = () => (
  <div>
    <main>
      <div>
        <Sidebar />
        <Experiences />
      </div>
    </main>
  </div>
);

export default ResumePage;
