import React, { useState } from 'react';
import logo from '../assets/logofasa.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500">
      {/* Top Bar */}
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center text-white text-xs px-4 md:px-8 py-2">
        <div>
          <span className="mr-4">
            🏢 4rth floor, ZIMPOST HQ Julius Nyerere & Silundika, Harare
          </span>
          <span>📧 fasasmartechnology@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>📞 +263 771416796</span>
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="sticky bg-white rounded-lg shadow mx-2 md:mx-6 mt-2 flex items-center justify-between px-4 md:px-6 py-3 relative">
        {/* Logo */}
        <div className="flex items-center ">
          <img className="h-12 w-auto mr-2" src={logo} alt="Fasamartech Logo" />
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
        {/* Desktop Contact Us Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Contact Us <span className="ml-1">→</span>
        </a>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-6 bg-orange-500 mb-1 rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-orange-500 mb-1 rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-orange-500 rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-20 flex flex-col items-center py-4 md:hidden animate-fade-in-down">
            <a
              href="#"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
            >
              About Us
            </a>
            <a
              href="#"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
            >
              Services
            </a>
            <a
              href="#"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
            >
              Contact
            </a>
            <a
              href="#"
              className="mt-2 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition w-11/12 text-center"
            >
              Contact Us <span className="ml-1">→</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
