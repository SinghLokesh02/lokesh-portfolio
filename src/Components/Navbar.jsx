import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-400">Lokesh</h1>
          </div>
          {/* Menu */}
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
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
