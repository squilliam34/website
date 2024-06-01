import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex profile">
      <img src="images/profile.jpg" alt="Will Fan" className="photo" />
      <h1 className="tennis-yellow">Will Fan</h1>
      <div className="medium-font">Private Banking Analyst @ Webster Bank</div>
    </div>
  );
};

export default Header;
