// src/App.tsx
import React from "react";
import {
  AboutMe,
  MoreAboutMe,
  ScrollButton,
  Slideshow,
  TennisBall,
} from "../../components/About";
import NavBar from "../../components/About/Global/NavBar";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scroll.css";

const App: React.FC = () => (
  <div>
    <NavBar />
    <main>
      <div>
        <TennisBall />
        <div className="about-button">
          <ScrollButton />
        </div>
      </div>
      <div className="flex wrapper margin-bottom">
        <AboutMe />
        <Slideshow />
      </div>
    </main>
  </div>
);

export default App;
