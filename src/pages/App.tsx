import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
import AboutPage from "./About/AboutPage";
import ResumePage from "./Resume/ResumePage";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
