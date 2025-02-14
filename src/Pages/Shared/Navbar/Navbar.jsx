import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-black">
          <img className="w-10" src={logo} alt="Café Lumière Logo" />
          Café Lumière
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-black hover:text-[#8f6146] font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-black hover:text-[#8f6146] font-semibold">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black hover:text-[#8f6146] font-semibold">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-black hover:text-[#8f6146] font-semibold">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-[#8f6146] font-semibold">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <Link to="/" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Home
          </Link>
          <Link to="/menu" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Menu
          </Link>
          <Link to="/blog" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Blog
          </Link>
          <Link to="/gallery" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Gallery
          </Link>
          <Link to="/contact" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
