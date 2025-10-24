import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gray-900">
      <h2 className="text-4xl font-semibold mb-6 text-teal-400">About Me</h2>
      <p className="max-w-3xl text-gray-300 mb-6 text-lg">
        Hi! I'm Ofentse, a Frontend Developer with a passion for creating engaging and responsive web experiences. 
        I love turning complex problems into elegant, intuitive solutions, and I'm always exploring new tools and 
        technologies to sharpen my craft.
      </p>
      <p className="max-w-3xl text-gray-300 mb-6 text-lg">
        Beyond coding, I enjoy collaborating with diverse teams, learning from others, and contributing to projects 
        that make a meaningful impact. I believe in clean, maintainable code and user-friendly design principles that 
        create memorable digital experiences.
      </p>
      <p className="max-w-3xl text-gray-300 mb-6 text-lg">
        When I'm not in front of a screen, I like to explore new music, read about emerging technologies, and 
        challenge myself with personal projects that push my creativity and problem-solving skills.
      </p>
      <p className="max-w-3xl text-gray-400 italic text-center mt-6">
        "Learning never stops, and every line of code is a step toward becoming better."
      </p>
    </div>
  );
};

export default AboutPage;
