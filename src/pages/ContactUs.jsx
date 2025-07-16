import React from 'react';
import Header from '../components/Navbar';
import image1 from '../assets/img1.jpeg';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Orange Section with Badge and Heading Side by Side on md+ */}
      <section className="bg-orange-500 flex flex-col md:flex-row items-center justify-center py-12 w-full md:space-x-6">
        <span className="bg-white/30 text-white font-semibold px-4 py-2 rounded ml-4 mb-4 md:mb-0 tracking-widest text-xs md:text-sm ">
          SEAMLESS. SECURE. SMART.
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
          CONTACT US
        </h1>
      </section>
      {/* Contact Form Section */}
      <section className="flex justify-center items-center py-12 bg-white">
        <form className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Contact Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                First Name*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Last Name*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email*
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Message*
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-800 text-white px-8 py-2 rounded font-semibold text-lg hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      {/* Appointment Banner Section */}
      <div className="w-full bg-white">
        <section className="w-9/10 bg-orange-500 rounded-lg my-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-8 gap-8 md:gap-0 mx-auto">
          {/* Left: Text and Actions */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Book Your Appointment in Just a Few Clicks
            </h3>
            <p className="text-white mb-4 max-w-md">
              Contact us today for fast, reliable service whether you're facing
              a simple or complex need.
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
              <button className="bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-orange-800 transition">
                Contact Us
              </button>
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
      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 mt-12 pt-10 pb-4 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold text-gray-800">
                Fasamartech
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Don't wait—get in touch now to schedule an appointment or request
              a free quote.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>📞</span>
              <span>+263 77 141 6796</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>📍</span>
              <span>
                4rth floor, ZIMPOST HQ Julius Nyerere & Silundika, Harare
              </span>
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
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Working Hours</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Mon-Fri: 8:00 AM - 4:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        {/* Newsletter and Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 border-t border-gray-200 pt-6 gap-4">
          <form className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email Address.."
              className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-r font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="text-gray-500 text-xs text-center md:text-right w-full md:w-auto">
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
    </div>
  );
};

export default ContactUs;
