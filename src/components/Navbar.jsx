import Logo from "../assets/RJ.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={Logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/rania-jabnouni-b67774228"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/SUNRANIA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/rania_rouro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/21699576233"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;