import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import "./App.css"
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <span className="font-semibold text-xl">Logo</span>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-green-500">Home</a>
            <a href="#" className="hover:text-green-500">About</a>
            <a href="#" className="hover:text-green-500">Services</a>
            <a href="#" className="hover:text-green-500">Contact</a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2">Home</a>
            <a href="#" className="block py-2">About</a>
            <a href="#" className="block py-2">Services</a>
            <a href="#" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default App;