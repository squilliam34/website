import React from "react";

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
