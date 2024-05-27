import React from "react";
import {
  AboutMe,
  ScrollButton,
  Slideshow,
  TennisBall,
} from "../../components/About";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scroll.css";

const AboutPage: React.FC = () => (
  <div>
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

export default AboutPage;
