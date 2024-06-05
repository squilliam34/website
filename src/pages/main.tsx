import React from "react";
import ReactDOM from "react-dom/client";
import "../css/styles.css";
import "../css/tennis.css";
import "../css/scroll.css";
import "../css/sidebar.css";
import "../css/resume.css";
import "../css/skills.css"
import "../css/footer.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
