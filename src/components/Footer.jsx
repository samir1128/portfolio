import React from 'react'

function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-gray-400 text-sm bg-[#0a192f] border-t border-blue-900/20 w-full">
      <p className="font-mono tracking-wide hover:text-blue-300 transition-colors">
        Designed & Built by Sa Mir © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer