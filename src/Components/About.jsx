import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Lokesh from "../assets/Lokesh.pdf";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8 text-justify md:text-left">
          I am a dedicated <span className="font-semibold text-blue-500">Coding Trainer </span> 
          with over 2 years of experience in institutional training. I specialize in breaking down 
          complex programming concepts into simple and easy-to-understand terms, ensuring that every 
          student, regardless of their prior knowledge, can grasp the fundamentals and excel. My teaching 
          approach focuses on creating a supportive and engaging learning environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full md:w-64">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Proficient In
            </h3>
            <p className="text-gray-300">
              C++, Data Structures and Algorithms (DSA), Python, HTML, CSS,
              JavaScript, React
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full md:w-64">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Experience
            </h3>
            <p className="text-gray-300">
              Over 2 years of teaching programming languages, front-end
              technologies, and back-end development. Trained numerous students
              in a practical, hands-on environment to achieve real-world
              problem-solving skills.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full md:w-64">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Hobbies
            </h3>
            <p className="text-gray-300">
              Exploring new technologies, solving coding challenges, and sharing
              knowledge through mentoring and training.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lokesh-singh-993a0a233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin size={40} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/lokeshsingh7695/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-all duration-300"
            >
              <FaInstagram size={40} />
            </a>
            {/* Email */}
            <a
              href="mailto:lokeshsingh7695@gmail.com"
              className="text-gray-300 hover:text-red-400 transition-all duration-300"
            >
              <FaEnvelope size={40} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/SinghLokesh02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-all duration-300"
            >
              <FaGithub size={40} />
            </a>
            {/* Phone */}
            <a
              href="tel:7985218361"
              className="text-gray-300 hover:text-green-400 transition-all duration-300"
            >
              <FaPhoneAlt size={40} />
            </a>
          </div>
        </div>

        {/* Get CV Button */}
        <div className="mt-12">
          <a
            href= {Lokesh} // Replace with the actual path to your CV file
            download
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-8 rounded-lg text-xl shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
