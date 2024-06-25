import { Link } from "react-scroll";
import { FiChevronsDown } from "react-icons/fi";

const ScrollButton: React.FC = () => {
  return (
    <div>
      <Link to="about-me" smooth={true} duration={500} offset={-300}>
        <div className="flex center-align column">
          <div>About Me</div>
          <FiChevronsDown size={20} />
        </div>
      </Link>
    </div>
  );
};

export default ScrollButton;
