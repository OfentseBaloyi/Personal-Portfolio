import React from "react";
import Navbar from "./pages/NavbarPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/FooterPage"; // <-- import the Footer
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white scroll-smooth">
      <Navbar />
      
      <main className="grow">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <Footer /> {/* <-- Footer added here */}
    </div>
  );
}

export default App;
