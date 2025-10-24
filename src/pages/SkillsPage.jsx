import React from "react";

const SkillsPage = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Git",
    "GitHub",
    "Bootstrap"
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-12 bg-linear-to-b from-gray-900 to-gray-800">
      <h2 className="text-5xl font-bold text-teal-400 mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex justify-center items-center bg-gray-800 rounded-xl py-4 text-gray-300 text-lg font-medium hover:bg-teal-500 hover:text-white hover:scale-105 transition-transform duration-300 shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
