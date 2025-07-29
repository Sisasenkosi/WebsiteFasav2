import React from 'react';
import image1 from '../assets/img1.jpeg';
import logo from '../assets/logofasa.png';
import { Link } from 'react-router-dom';

const Footer2 = () => (
  <>
    {/* Appointment Banner Section */}
    <div className="w-full bg-white">
      <section className="w-9/10 bg-orange-500 rounded-lg my-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-8 gap-8 md:gap-0 mx-auto">
        {/* Left: Text and Actions */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Book Your Appointment in Just a Few Clicks
          </h3>
          <p className="text-white mb-4 max-w-md">
            Contact us today for fast, reliable service whether you're facing a
            simple or complex need.
          </p>
          <div className="flex items-center mb-4">
            <span className="bg-white text-orange-500 rounded-full p-3 mr-3 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7.95l1.6 2.6a2 2 0 01-.45 2.6l-.7.7a16.06 16.06 0 006.6 6.6l.7-.7a2 2 0 012.6-.45l2.6 1.6a2 2 0 01.95 1.7V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V9a2 2 0 012-2z"
                />
              </svg>
            </span>
            <span className="text-white text-lg font-semibold">
              +263 77 141 6796
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-orange-500 px-5 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
              Start Your Journey
            </button>
            <Link
              to="/contactus"
              className="bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-orange-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image1}
            alt="Appointment"
            className="w-56 h-56 object-cover rounded-xl shadow-lg hidden md:block"
          />
        </div>
      </section>
    </div>

    {/* Main Footer Content */}
    <footer className="bg-[#181d26] text-white pt-10 pb-4 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center mb-2">
            <img
              className="h-15 w-3/7  mr-2"
              src={logo}
              alt="Fasamartech Logo"
            />
          </div>
          <p className="text-gray-300 text-sm">
            Don't wait—get in touch now to schedule an appointment or request a
            free quote.
          </p>
          <div className="flex items-center space-x-2 text-gray-300 text-sm mt-2">
            <span>📞</span>
            <span>+263 77 141 6796</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <span>📍</span>
            <span>
              4rth floor, ZIMPOST HQ Julius Nyerere & Silundika, Harare
            </span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <span>✉️</span>
            <span>fasamartech@gmail.com</span>
          </div>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.facebook.com/share/1JXeGw2oqx/"
              className="text-gray-400 hover:text-orange-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="www.linkedin.com/in/fasa-smartech"
              className="text-gray-400 hover:text-orange-500"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/fasasmartech/"
              className="text-gray-400 hover:text-orange-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@fasasmartech"
              className="text-gray-400 hover:text-orange-500"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        {/* Top Links */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-3">Top Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link
                to="/aboutus"
                className="hover:text-orange-500"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-orange-500"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-orange-500"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-3">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Couriers & Logistics</li>
            <li>Property Managers</li>
            <li>E-commerce Brands</li>
            <li>Consumers</li>
          </ul>
        </div>
        {/* Working Hours */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-3">Working Hours</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex justify-between">
              <span>Mon-Fri</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>Close</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-2xl mx-auto flex flex-col md:flex-col items-center md:w-auto  gap-4 pb-4">
        <div className="text-orange-500 font-semibold text-base mb-2 md:mb-0">
          Subscribe To Our Newsletter
        </div>
        <form className="flex w-full md:w-auto max-w-xl">
          <input
            type="email"
            placeholder="Your Email Address..."
            className="px-4 py-3 rounded-l-lg border border-gray-700 bg-[#232733] focus:outline-none focus:ring-2 focus:ring-orange-400 text-base w-48 md:w-64 placeholder-gray-400 text-gray-100 flex-1"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-r-lg font-semibold text-base hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright centered below the line */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-4 border-t border-gray-200 pt-6 gap-4">
        <div className="text-gray-500 text-xs text-center w-full flex justify-center">
          &copy; {new Date().getFullYear()} fasasmartech. All Rights Reserved.
        </div>
      </div>
    </footer>
  </>
);

export default Footer2;
