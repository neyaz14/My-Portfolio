import { Link } from "react-router-dom";
import { useState } from "react";

import Hero from "../HeroSection/Hero";
import contact from "../Contact/Contact";
import aboutme from "../AboutMe/Aboutme";
import project from "../Project/Project";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e1e2f] opacity-96 text-white shadow-md z-50 mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[#b399ff]">Neyaz Morshid</h1>
          </div>
          <div className="hidden lg:flex space-x-6">
            <Link to="#Hero" className="text-white hover:text-purple-400">Home</Link>
            <Link to="#about" className="text-white hover:text-purple-400">About Me</Link>
            <Link to="#projects" className="text-white hover:text-purple-400">Projects</Link>
            <Link to="#contact" className="text-white hover:text-purple-400">Contact</Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-[#1e1e2f] p-4 space-y-2`}>
        <Link to="#Hero" className="block text-white hover:text-purple-400">Home</Link>
        <Link to="#about" className="block text-white hover:text-purple-400">About Me</Link>
        <Link to="#projects" className="block text-white hover:text-purple-400">Projects</Link>
        <Link to="#contact" className="block text-white hover:text-purple-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
