import React from 'react'

function Hero() {
  return (
    <section id="home" className="pt-38 pb-24 px-6 w-full">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="text-gray-400 mb-4">Hii, I'm</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Sa Mir</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-300">I build things for the web</h2>
        <p className="text-gray-400 max-w-xl mb-12 text-lg">
          I'm a full stack web developer specializing in building exceptional digital experiences
          with the MERN (MongoDB, Express, React, Node.js) stack.
        </p>
        {/* <a 
          href="#projects" 
          className="btn px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-md hover:text-whitebg-blue-400 hover:bg-opacity-10 inline-block"
        >
          View My Work
        </a> */}
        {/* <a
          href="#projects"
          className="btn px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-md 
             hover:bg-blue-400 hover:bg-opacity-10 hover:text-white inline-block transition-colors duration-300"
        >
          View My Work
        </a> */}
    <a 
  href="#projects" 
  className="btn px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-md 
             hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 
             hover:text-white hover:opacity-90 shadow-lg hover:shadow-blue-500/30 
             transition-all"
>
  View My Work
</a>


      </div>
    </section>
  )
}

export default Hero