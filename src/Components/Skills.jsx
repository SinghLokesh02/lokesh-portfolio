import React from "react";

const skills = [
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NodeJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png?f=webp",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "DSA",
    logo: "https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ",
  },
  {
    name: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-4 transition-opacity duration-300 hover:opacity-80"
            />
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
