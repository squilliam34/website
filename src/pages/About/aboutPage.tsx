// src/App.tsx
import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Slideshow from "../../components/Slideshow";
import TennisBall from "../../components/TennisBall";
import ScrollButton from "../../components/ScrollButton";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scoll.css";

const App: React.FC = () => (
  <div>
    <Header />
    <main>
      <div>
        <TennisBall />
        <div className="about-button">
          <ScrollButton />
        </div>
      </div>
      <div className="flex wrapper margin-bottom">
        <About />
        <Slideshow />
      </div>
    </main>
  </div>
);

export default App;
