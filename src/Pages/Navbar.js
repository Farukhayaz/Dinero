import React, { useState } from 'react';
import { FaHeadphones, FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo */}
            <img src="/images/logo.png" alt="Logo" className="h-12" />
            {/* Navbar items */}
            <ul className="hidden md:flex space-x-14 ml-20 font-medium">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">Services</a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">Property Selling</a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">Shop</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            {/* Button 1 */}
            <button className="hidden md:block bg-blue-500 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-600">ENQUIRY NOW</button>
            {/* Button 2 */}
            <button className="hidden md:block bg-white text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white font-medium">Post Property</button>
            {/* Headphones dropdown */}
            <div className="relative">
              <button onClick={() => setShowOptionsDropdown(!showOptionsDropdown)} className="text-gray-700 focus:outline-none">
                <FaHeadphones className="w-6 h-6 text-blue-500 " />
              </button>
              {showOptionsDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Headphone</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Speaker</a>
                </div>
              )}
            </div>
            {/* Profile dropdown */}
            <div className="relative">
              <button onClick={() => setShowUserDropdown(!showUserDropdown)} className="text-gray-700 focus:outline-none">
                <FaUser className="w-6 h-6  text-blue-500" />
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Settings</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
            <div className="md:hidden bg-white py-2 px-4 flex justify-between">
        <button className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
          {showMobileMenu ? <FaTimes className="w-6 h-6 text-blue-500" /> : <FaBars className="w-6 h-6 text-blue-500" />} {/* Toggle burger and cross icons */}
        </button>
      </div>
      {/* Slide-in div for mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white fixed inset-0 z-50 mt-20  overflow-hidden">
          {/* Add your mobile menu content here */}
          <div className=" w-64 p-10 ">
            {/* Mobile menu items */}
            <ul className="mt-10">
              <li className="py-2 mt-5 px-4 text-gray-700 hover:bg-gray-300">Services</li>
              <li className="py-2 mt-5 px-4 text-gray-700 hover:bg-gray-300">Property Selling</li>
              <li className="py-2 mt-5 px-4 text-gray-700 hover:bg-gray-300">Shop</li>
            </ul>
            <button className="  bg-blue-500 mt-5 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-600">ENQUIRY NOW</button>
            <button className="  bg-white mt-5 text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white font-medium">Post Property</button>
          </div>
        </div>
      )}
          </div>

        </div>
      </div>
      {/* Mobile navbar */}
     
    </nav>
  );
}
