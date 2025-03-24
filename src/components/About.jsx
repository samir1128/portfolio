
import React from 'react'
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#0a192f] to-[#112240]/70 w-full">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-16 gradient-text text-center md:text-left">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Sa Mir, a passionate full-stack developer with a strong focus on creating
              robust and user-friendly web applications using the MERN stack.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development started couple of years ago, and I've had the opportunity
              to work on various projects ranging from e-commerce platforms to real-time applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I enjoy tackling complex problems and transforming ideas into elegant, efficient solutions.
              When I'm not coding, you can find me exploring the latest web technologies or contributing
              to open-source projects.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 p-1 shadow-xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full bg-[#112240] flex items-center justify-center ">
                {/* border-4 border-[#0a192f] */}
                {/* <span className="text-7xl gradient-text font-bold">SM</span> */}
                <img src={aboutImage} className="w-full h-full rounded-full object-cover" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About