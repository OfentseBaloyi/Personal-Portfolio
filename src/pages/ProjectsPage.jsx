import React from "react";
import automotive from "../assets/automotive.png";
import clock from "../assets/clock.png";
import calculator from "../assets/calculator.png";


const ProjectsPage = () => {
  const projects = [
    {
      title: "Automotive Car Dealership Website",
      desc: "An automotive car dealer website built with bootstrap.",
      image: automotive,
      link: "https://automotive-cardealer.netlify.app/", 
    },
    {
      title: "CLOCK",
      desc: "A simple CLOCK made with HTML, CSS, and JavaScript.",
      image: clock,
      link: "https://scriptjsclo.netlify.app/",
    },
    {
      title: "Calculator App",
      desc: "A Calculator App built with HTML, CSS, and JavaScript.",
      image: calculator,
      link: "https://effervescent-choux-8f4909.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 bg-gray-900">
      <h2 className="text-4xl font-semibold text-teal-400 mb-12">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-400/40 transition flex flex-col items-center"
          >
            
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-2 text-center">{p.title}</h3>
            <p className="text-gray-300 mb-4 text-center">{p.desc}</p>
            
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-teal-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-500 transition"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
