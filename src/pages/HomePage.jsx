import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ofentse 👋</h1>
        <p className="text-lg text-gray-500 max-w-md mb-8">
          I'm a Frontend Developer passionate about building modern, responsive web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <a
            href="/SOFTWARE DEV CV.pdf"
            download
            className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:brightness-125"
          >
            Download CV
          </a>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/OfentseBaloyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-3xl transition-all duration-300 hover:text-teal-500 hover:shadow-[0_0_10px_#14b8a6] hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ofentse-baloyi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-3xl transition-all duration-300 hover:text-teal-500 hover:shadow-[0_0_10px_#14b8a6] hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/me.jpg"
          alt="Ofentse"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-teal-500"
        />
      </div>
    </div>
  );
};

export default HomePage;
