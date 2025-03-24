import React from 'react'

function Skills({ skills }) {
  return (
    <section id="skills" className="pt-8 pb-10 px-6 bg-gradient-to-b from-[#0a192f] to-[#112240] w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 gradient-text text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card bg-[#1a2c4e]/50 rounded-lg p-8 shadow-xl border border-blue-900/20 backdrop-blur-sm hover:translate-y-[-8px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-blue-900/30 pb-3">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="mr-3 text-blue-400 text-lg">▹</span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills