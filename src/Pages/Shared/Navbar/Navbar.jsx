import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
        Café Lumière
        </a>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Care Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Care Guide
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Gallery
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
