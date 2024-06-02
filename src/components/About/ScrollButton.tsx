import { Link as ScrollLink } from "react-scroll";
import { FiChevronsDown } from "react-icons/fi";

const ScrollButton: React.FC = () => {
  return (
    <div className="flex center-align column">
      <ScrollLink to="about-me" smooth={true} duration={500} offset={-300}>
        <div className="flex center-align column">
          <div>About Me</div>
          <FiChevronsDown size={20} className="text-gray-600" />
        </div>
      </ScrollLink>
    </div>
  );
};

export default ScrollButton;
