import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with MERN stack featuring user authentication, product search, cart management, and payment processing.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with features like direct messaging, group chats, notifications, and emoji support.",
      tech: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management System",
      description: "A Kanban-style project management tool allowing users to organize tasks, set deadlines, and track progress.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Context API"],
      github: "#",
      live: "#"
    },
  ];
  
  const skills = [
    { category: "Frontend", items: ["React", "Redux", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Material UI"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "GraphQL", "JWT"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "npm/yarn", "Webpack", "Docker", "CI/CD"] }
  ];
  
  return (
    <div className="min-h-screen bg-[#091628] text-gray-300 overflow-x-hidden">
      <div className="max-w-[90vw] mx-auto bg-[#0a192f] relative">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App