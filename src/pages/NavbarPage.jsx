import React from "react";
import { Link } from "react-scroll";

const NavbarPage = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-teal-400">MyPortfolio</h1>
        <ul className="flex space-x-6">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer capitalize text-gray-300 hover:text-teal-400 transition"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPage;