import React from "react";
import {
  AboutMe,
  ScrollButton,
  Slideshow,
  TennisBall,
  MoreAboutMe,
  TechnicalSkills,
} from "../../components/About";

const AboutPage: React.FC = () => {
  return (
    <div>
      <main>
        <div>
          <TennisBall />
          <div className="about-button">
            <ScrollButton />
          </div>
        </div>
        <div className="flex wrapper margin-bottom large-margin-top">
          <AboutMe />
          <Slideshow />
        </div>
        <div className="flex wrapper margin-bottom">
          <TechnicalSkills />
          <MoreAboutMe />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
