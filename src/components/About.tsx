import React from "react";

const About: React.FC = () => (
  <>
    <div id="about-me" className="header">
      <h1 className="medium-font">
        Hi there! My name is Will Fan <span className="waving-hand">👋</span>
      </h1>
      <p className="line-height">
        I'm currently a junior at the College of William and Mary, and I'm
        pursuing a Bachelor of Science with a double major in Computer Science
        and Applied Mathematics. I built this website to showcase my
        experiences, projects, and a little of my personality, too. Feel free to
        take a look around! Below are my Github and LinkedIn if you want to
        connect with me or look at other work of mine (or you can{" "}
        <a href="mailto:wdfan0128@gmail.com">email me here!</a>).
      </p>
      <div className="flex margin-top">
        <a
          href="https://github.com/squilliam34"
          target="_blank"
          className="icons"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/william-fan-376159265/"
          target="_blank"
          className="icons"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </>
);

export default About;
