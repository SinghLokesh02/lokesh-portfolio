import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg p-8">
        <form
          className="space-y-6"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="254b844c-a74f-45e9-8507-31ad8c507ea3"
          />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3 text-white"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3 text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3 text-white"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-500 hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Connect with Me</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lokesh-singh-993a0a233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/lokeshsingh7695/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </a>
          {/* Email */}
          <a
            href="mailto:lokeshsingh7695@gmail.com"
            className="text-gray-300 hover:text-red-400 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={40} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/SinghLokesh02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
          {/* Phone */}
          <a
            href="tel:+917985218361"
            className="text-gray-300 hover:text-green-400 transition-all duration-300"
            aria-label="Phone"
          >
            <FaPhoneAlt size={40} />
          </a>
        </div>
      </div>
      <footer className="mt-12 p-4  text-center text-gray-400">
        <p>&copy; 2025 Lokesh Singh | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
