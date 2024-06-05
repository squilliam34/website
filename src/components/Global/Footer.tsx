import React from "react";
import { Link } from "react-scroll";
import { FiChevronsUp } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to="header" smooth={true} duration={500} offset={-300}>
            <div className="chevrons">
              <FiChevronsUp />
            </div>
          </Link>
        </div>
        <div>&copy; Will Fan</div>
      </div>
    </footer>
  );
};

export default Footer;
