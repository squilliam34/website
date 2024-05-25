// src/App.tsx
import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Slideshow from "../../components/Slideshow";
import TennisBall from "../../components/TennisBall";
import "../../css/styles.css";
import "../../css/tennis.css";

const App: React.FC = () => (
  <div>
    <Header />
    <main>
      <div className="margin-bottom">
        <TennisBall />
      </div>
      <div className="flex wrapper">
        <About />
        <Slideshow />
      </div>
    </main>
  </div>
);

export default App;
