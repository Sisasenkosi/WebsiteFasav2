import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logofasa.png';

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-30">
      {/* Main navbar */}
      <nav className="sticky bg-white rounded-lg shadow mx-2 md:mx-6 flex items-center justify-between px-4 md:px-6 py-3 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Fasamartech Logo" className="h-12 w-auto mr-2" />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-semibold'
                : 'text-gray-800 hover:text-orange-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-semibold'
                : 'text-gray-800 hover:text-orange-500'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-semibold'
                : 'text-gray-800 hover:text-orange-500'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-semibold'
                : 'text-gray-800 hover:text-orange-500'
            }
          >
            Contact
          </NavLink>
        </div>
        <Link
          to="/contactus"
          className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition items-center"
        >
          Contact Us <i className="fas fa-arrow-up-right-from-square ml-2"></i>
        </Link>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-lg flex flex-col items-start px-6 py-4 md:hidden animate-fade-in z-40">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-800 hover:text-orange-500') + ' py-2 w-full'
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                (isActive
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-800 hover:text-orange-500') + ' py-2 w-full'
              }
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                (isActive
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-800 hover:text-orange-500') + ' py-2 w-full'
              }
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                (isActive
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-800 hover:text-orange-500') + ' py-2 w-full'
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/contactus"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition flex items-center mt-4 w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us{' '}
              <i className="fas fa-arrow-up-right-from-square ml-2"></i>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HomeNavbar;
