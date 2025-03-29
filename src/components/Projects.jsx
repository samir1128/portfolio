import React from 'react'

function Projects({ projects }) {
  return (
    <section id="projects" className="pt-8 pb-28 px-6 bg-[#112240] bg-opacity-60 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 gradient-text text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg p-8 flex flex-col h-full shadow-xl border border-blue-900/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  className="btn px-5 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:bg-opacity-10 text-sm font-medium transition-all flex-1 text-center"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  className="btn px-5 py-2 bg-blue-500 bg-opacity-20 text-blue-300 rounded-md hover:bg-opacity-30 text-sm font-medium transition-all flex-1 text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects