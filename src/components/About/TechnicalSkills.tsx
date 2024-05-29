import React from "react";

const TechnicalSkills: React.FC = () => {
  return (
    <div className="flex skills">
      <div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/cpp.png" alt="cpp" />
          <p>C++</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/css.png" alt="css" />
          <p>CSS</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/git.png" alt="git" />
          <p>Git</p>
        </div>
      </div>
      <div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/html.png" alt="html" />
          <p>HTML</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/java.png" alt="java" />
          <p>Java</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/nodejs.png" alt="node.js" />
          <p>Node.js</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/javascript.png" alt="javascript" />
          <p>Javascript</p>
        </div>
      </div>
      <div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/python.png" alt="python" />
          <p>Python</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/react.png" alt="react" />
          <p>React</p>
        </div>
        <div className="flex column center-align skills-item small-margin-bottom">
          <img src="images/typescript.png" alt="typescript" />
          <p>Typescript</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
