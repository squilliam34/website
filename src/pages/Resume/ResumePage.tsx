import React from "react";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scroll.css";
import "../../css/sidebar.css";

import { Sidebar } from "../../components/Resume";

const ResumePage: React.FC = () => (
  <div>
    <main>
      <div>
        <Sidebar />
      </div>
    </main>
  </div>
);

export default ResumePage;
