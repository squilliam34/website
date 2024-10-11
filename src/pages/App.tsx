import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
import AboutPage from "./About/AboutPage";
import ResumePage from "./Resume/ResumePage";
import ProjectsPage from "./Projects/ProjectsPage";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
