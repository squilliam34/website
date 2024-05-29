import React from "react";

const MoreAboutMe: React.FC = () => {
  return (
    <div className="header margin-left margin-right">
      <h1 className="medium-font">
        I love solving <span className="tennis-yellow">problems</span>
      </h1>
      <p className="line-height">
        That's what drew me to coding in the first place. Whether it was on the
        tennis court or in the classroom, finding solutions has always been my
        passion. I've come to love programming and all that comes with it,
        whether that's finding a bug, implementing Djikstra's algorithm, or
        designing websites, and I can't wait to see where it takes me.
      </p>
    </div>
  );
};

export default MoreAboutMe;
