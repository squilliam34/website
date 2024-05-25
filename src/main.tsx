import React from "react";
import ReactDOM from "react-dom/client";
import "./css/styles.css";
import App from "./pages/About/aboutPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);