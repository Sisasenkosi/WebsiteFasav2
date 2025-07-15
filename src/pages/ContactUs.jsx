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
    </div>
  );
};

export default ContactUs;
