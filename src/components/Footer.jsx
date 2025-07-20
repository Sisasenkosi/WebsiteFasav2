import React from 'react';

const playStoreBadge =
  'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-12 pt-10 pb-4 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Company Info */}
      <div className="md:col-span-2 flex flex-col space-y-3">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl font-bold text-gray-800">Fasamartech</span>
        </div>
        <p className="text-gray-600 text-sm">
          Don't wait—get in touch now to schedule an appointment or request a
          free quote.
        </p>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>📞</span>
          <span>+263 77 141 6796</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>📍</span>
          <span>4rth floor, ZIMPOST HQ Julius Nyerere & Silundika, Harare</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>✉️</span>
          <span>fasasmartechnology@gmail.com</span>
        </div>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        {/* Google Play Store Button */}
        <div className="mt-4">
          <div className="text-xs font-semibold text-gray-700 mb-1">
            Download our app
          </div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playStoreBadge}
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
      {/* Top Links */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Top Links</h4>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>
            <a href="#" className="hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              FAQ'S
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* Our Services */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Our Services</h4>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>Smart Lockers</li>
          <li>IT & Software Solutions</li>
          <li>Electronics & Hardware</li>
          <li>Training & Support</li>
        </ul>
      </div>
      {/* Working Hours */}
      <div className="flex justify-center md:justify-start">
        <div className="bg-white rounded-l shadow-lg px-4 py-2 mt-4 w-[600px]">
          <h4 className="font-semibold text-gray-800 mb-3">Working Hours</h4>
          <ul className="divide-y divide-gray-200 text-gray-600 text-sm">
            <li className="py-2 flex justify-between">
              <span>Mon-Fri</span>
              <span>8:00 AM - 4:00 PM</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 12:00 PM</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Newsletter and Copyright */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 border-t border-gray-200 pt-6 gap-4">
      <div className="w-full md:w-auto flex flex-col items-center md:items-start mb-2 md:mb-0">
        <div className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center md:text-left">
          Subscribe To Our Newsletter
        </div>
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base w-48 md:w-64 placeholder-gray-400 text-gray-800"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-r-lg font-semibold text-base hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-gray-500 text-xs text-center w-full flex justify-center">
        &copy; {new Date().getFullYear()} fasasmartech. All Rights Reserved.
        &nbsp; | &nbsp;
        <a href="#" className="hover:text-orange-500">
          Terms & Conditions
        </a>{' '}
        &nbsp; | &nbsp;
        <a href="#" className="hover:text-orange-500">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
