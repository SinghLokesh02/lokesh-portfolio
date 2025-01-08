import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg w-full fixed top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="head">
                <h1 className="text-2xl font-bold text-purple-400">Lokesh</h1>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <div className="others-link flex gap-x-5">
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
                  >
                    Home
                  </a>
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
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white duration-1000 ${
                    navbarOpen ? "transform rotate-180" : ""
                  }`}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            navbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } sm:hidden overflow-hidden transition-all duration-700 ease-in-out`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 hover:bg-gray-800"
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 hover:bg-gray-800"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 hover:bg-gray-800"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
