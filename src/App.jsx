import React from "react";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div id="home" className="pt-20">
        <Home />
      </div>
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="experience" className="pt-20">
        <Experience />
      </div>
      <div id="skills" className="pt-20">
        <Skills />
      </div>
      <div id="contact" className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default App;
