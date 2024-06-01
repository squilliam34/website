import React from "react";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="flex column sidebar">
      <img src="images/profile.jpg" className="photo margin-top" />
      <div className="margin-top tennis-yellow">Will Fan</div>
      <div>Williamsburg, VA</div>
    </div>
  );
};

export default Header;
