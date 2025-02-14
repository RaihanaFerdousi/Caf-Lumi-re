import { useState } from "react";
import logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-bold text-black">
          <img className="w-10" src={logo} alt="" />
          Café Lumière
        </a>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6">
        <Link to='/'>
            <a
              href="#"
              className="block py-2 text-black hover:text-[#8f6146] font-semibold"
            >
              Home
            </a>
          </Link>
          <Link to='/contactus'>
            <a
              href="#"
              className="block py-2 text-black hover:text-[#8f6146] font-semibold"
            >
              Contact Us
            </a>
          </Link>
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
          <Link>
            {" "}
            <a
              href="#"
              className="block py-2 text-black hover:text-[#8f6146] font-semibold"
            >
              Home
            </a>
          </Link>
          <Link>
            <a
              href="#"
              className="block py-2 text-black hover:text-[#8f6146] font-semibold"
            >
              Contact Us
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
