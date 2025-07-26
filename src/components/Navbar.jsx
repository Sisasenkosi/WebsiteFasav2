import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logofasa.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 ">
      {/* Main Navbar */}
      <nav className="sticky bg-white rounded-lg shadow mx-2 md:mx-6  flex items-center justify-between px-4 md:px-6 py-3 relative">
        {/* Logo */}
        <div className="flex items-center ">
          <img className="h-12 w-auto mr-2" src={logo} alt="Fasamartech Logo" />
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 font-semibold px-4 py-2'
                  : 'text-gray-800 hover:text-orange-500 px-4 py-2'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 font-semibold px-4 py-2'
                  : 'text-gray-800 hover:text-orange-500 px-4 py-2'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 font-semibold px-4 py-2'
                  : 'text-gray-800 hover:text-orange-500 px-4 py-2'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 font-semibold px-4 py-2'
                  : 'text-gray-800 hover:text-orange-500 px-4 py-2'
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        {/* Desktop Contact Us Button */}
        <Link
          to="/contactus"
          className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Contact Us <span className="ml-1">→</span>
        </Link>
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
            <Link
              to="/"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
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
            <Link
              to="/contactus"
              className="py-2 text-gray-700 font-medium w-full text-center hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contactus"
              className="mt-2 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition w-11/12 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us <span className="ml-1">→</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
