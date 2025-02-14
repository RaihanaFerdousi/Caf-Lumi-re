import { useState } from "react";
import logo from '../../../assets/Logo.png'

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
          <li>
            <a href="#" className="text-black hover:text-[#8f6146] font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-[#8f6146] font-semibold">
              Care Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-[#8f6146] font-semibold">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-[#8f6146] font-semibold">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-[#8f6146] font-semibold">
              Contact
            </a>
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
          <a href="#" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Home
          </a>
          <a href="#" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Care Guide
          </a>
          <a href="#" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Blog
          </a>
          <a href="#" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Gallery
          </a>
          <a href="#" className="block py-2 text-black hover:text-[#8f6146] font-semibold">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
