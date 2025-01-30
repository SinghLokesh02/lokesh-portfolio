import React from "react";
import "../App.css";
import ProfilePic from "../assets/ProfilePic.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 pb-0 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-fadeInDown">
          Welcome to <span className="text-blue-500">Lokesh Singh's</span>{" "}
          Portfolio
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300 animate-fadeInUp">
          Coding Trainer | Mentor | Passionate about Empowering Learners
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-bounce"
          onClick={() => alert("Welcome to my portfolio!")}
        >
          Get Started
        </button>
      </div>

      {/* About Section */}
      <div className="mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn md:px-[12%]">
          <div className="text-lg text-gray-300 flex items-center text-justify md:text-left">
            <p>
              Hi! I am Lokesh Singh, a highly motivated and experienced Coding
              Trainer with expertise in languages like Python, JavaScript, C++,
              and Java. I have trained numerous students, helping them achieve
              their goals in software development.
            </p>
          </div>
          <div className="flex md:justify-end justify-center">
            <img
              src={ProfilePic}
              alt="Lokesh Singh"
              className="rounded-full w-72 h-72 shadow-lg border-4 border-blue-500 animate-zoomIn object-cover p-2"
              style={{objectPosition:"center top"}}
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-12 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">
          Key Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 animate-slideUp">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "C++",
            "Java",
            "Bootstrap",
            "Data structures and algorithms",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
