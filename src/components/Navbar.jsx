import React from 'react'
// 
function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <nav className="fixed z-50 bg-opacity-95 backdrop-filter backdrop-blur-lg -webkit-backdrop-filter -webkit-backdrop-blur-lg shadow-lg"
         style={{ backgroundColor: 'rgba(10, 25, 47, 0.95)' }}>
          
      <div className="w-[90vw] mx-auto flex justify-between items-center  py-5 px-6">
        {/* Logo on the left */}
        <div className="text-2xl font-bold gradient-text tracking-wider">Sa Mir</div>

        {/* Links on the right */}
        <div className="ml-auto hidden md:flex items-center space-x-10">
          <a href="#home" className="nav-link text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium tracking-wide">Home</a>
          <a href="#about" className="nav-link text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium tracking-wide">About</a>
          <a href="#projects" className="nav-link text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium tracking-wide">Projects</a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium tracking-wide">Skills</a>
          <a href="#contact" className="nav-link text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium tracking-wide">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-blue-400 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden max-w-[90vw] mx-auto mt-4 py-4 px-2 bg-gray-900 bg-opacity-95 rounded-lg shadow-xl border border-gray-800">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="nav-link text-gray-300 hover:text-blue-300 block py-2 px-4 rounded hover:bg-gray-800 transition-all">Home</a>
            <a href="#about" className="nav-link text-gray-300 hover:text-blue-300 block py-2 px-4 rounded hover:bg-gray-800 transition-all">About</a>
            <a href="#projects" className="nav-link text-gray-300 hover:text-blue-300 block py-2 px-4 rounded hover:bg-gray-800 transition-all">Projects</a>
            <a href="#skills" className="nav-link text-gray-300 hover:text-blue-300 block py-2 px-4 rounded hover:bg-gray-800 transition-all">Skills</a>
            <a href="#contact" className="nav-link text-gray-300 hover:text-blue-300 block py-2 px-4 rounded hover:bg-gray-800 transition-all">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
