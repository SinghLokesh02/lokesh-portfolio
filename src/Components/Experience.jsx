import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Coding Trainer",
      company: "Kodu - powered by Dhurina - Sikar",
      duration: "April 2024 - Present",
      description:
        "MERN Stack Trainer specializing in simplifying complex concepts. I empower learners with clear and concise explanations, making even the most challenging topics easily understandable and enjoyable to learn.",
    },
    {
      id: 2,
      role: "Software Faculty",
      company: "Miracle IT Career Academy  - Bhopal",
      duration: "Nov 2023 - April 2024",
      description:
        "Successfully trained aspiring developers in C, C++, Python, and Frontend technologies at Miracle IT Career Academy - Bhopal. Fostered a strong understanding of programming fundamentals and equipped students with the skills necessary to excel in the competitive IT industry",
    },
    {
      id: 3,
      role: "IT Trainer",
      company: "Technoglobe - Jaipur",
      duration: "July 2023 - Nov 2023",
      description:
        "Prepared aspiring developers for successful careers in the IT industry as a Coding Trainer at Technoglobe - Jaipur. Provided comprehensive training in C, C++, Python, and Frontend development, equipping students with the knowledge and skills required to excel in today's competitive job market..",
    },
  ];

  return (
    <div className="  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Professional Experience
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
            <p className="text-blue-500 text-sm mb-1">{experience.company}</p>
            <p className="text-gray-400 text-sm mb-3">{experience.duration}</p>
            <p className="text-gray-300 text-sm">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
