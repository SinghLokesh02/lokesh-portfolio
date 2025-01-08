import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-purple-400">Lokesh</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                Contact Me
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-purple-400 focus:outline-none transition-colors duration-300"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-800 shadow-md transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } transition-all duration-500 ease-in-out`}
        style={{ zIndex: 40 }}
      >
        <div className="py-4 px-4 space-y-4">
          <a
            href="#about"
            className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#skills"
            className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
