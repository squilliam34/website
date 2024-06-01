import React from "react";
import "../../css/styles.css";
import "../../css/tennis.css";
import "../../css/scroll.css";
import "../../css/header.css";

import { Header } from "../../components/Resume";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const ResumePage: React.FC = () => (
  <div>
    <main>
      <div className="flex medium-margin-top align-start">
        <div>
          <Header />
        </div>
        <div className="flex contact-info column">
          <h1>Contact me</h1>
          <div>
            <IoIosMail />
            wdfan0128@gmail.com
          </div>
          <div>
            <FaPhone />
            <p>(757) 775-3185</p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ResumePage;
