import React from 'react';

import Header from '../components/Navbar';
import Footer2 from '../components/Footer2';
import sisa from '../assets/team/sisa.jpeg';
import farai from '../assets/team/Farai.jpeg';
import brian from '../assets/team/Brian.jpeg';
import tanya from '../assets/team/Tanya.jpeg';
import tino from '../assets/team/Tino.jpeg';
import trus from '../assets/team/trus.jpeg';
import Milestones from '../components/Milestones';

const About = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Orange About Us Banner */}
      <section className="bg-orange-500 flex-row items-center justify-center py-2  w-full">
        <span className="bg-white/30 text-white font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm">
          SEAMLESS. SECURE. SMART.
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          About Us
        </h1>
      </section>

      {/* About Us Card Section */}
      <section className="flex justify-center items-center py-12 bg-white">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
          {/* Left: Text Card */}
          <div className="flex-1 bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-[#176ca7] text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-800 mb-4">
              At FasaSmartech, we're transforming the way packages are delivered
              and received. Our intelligent locker solutions are designed to
              eliminate delivery friction, save time, and maximize
              convenience—for everyone involved in the logistics chain.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 text-sm">
                <span className="inline-block w-5 h-5 bg-[#f77c1c] rounded-full mr-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Experienced, Reliable, and Ready to Serve
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="inline-block w-5 h-5 bg-[#f77c1c] rounded-full mr-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Your dependable Partner for the Long Haul
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="inline-block w-5 h-5 bg-[#f77c1c] rounded-full mr-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Our Commitment to Quality
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="inline-block w-5 h-5 bg-[#f77c1c] rounded-full mr-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Serving You with Integrity
              </li>
            </ul>
          </div>
          {/* Right: Images (no card, border, or shadow) */}
          <div className="flex-1 flex flex-col gap-4 items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
              alt="Locker"
              className="rounded-lg w-64 h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
              alt="Access"
              className="rounded-lg w-64 h-48 object-cover"
            />
          </div>
        </div>
      </section>
      {/* Meet Our Team Section */}
      <section className="py-16 bg-[z]">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#176ca7] text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-6">
            {/* CEO */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={trus}
                alt="Truswell Nyamakanga"
                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-[#f77c1c]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">
                Truswell Nyamakanga
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                Chief Executive Officer
              </p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* CTO */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={farai}
                alt="Farai Nechikwira"
                className="w-20 h-20 rounded-full object-cover object-top mb-2 border-2 border-[#176ca7]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">
                Farai Nechikwira
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                Chief Technology Officer
              </p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Lead Web Developer */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={sisa}
                alt="Sisasenkosi Sibanda"
                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-[#f77c1c]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">
                Sisasenkosi Sibanda
              </h3>
              <p className="text-xs text-gray-600 mb-1">Lead Web Developer</p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Secretary */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={tanya}
                alt="Tanyaradzwa Murapa"
                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-[#176ca7]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">
                Tanyaradzwa Murapa
              </h3>
              <p className="text-xs text-gray-600 mb-1">Secretary</p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Cyber Security Officer */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={brian}
                alt="Brian Zhou"
                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-[#f77c1c]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">Brian Zhou</h3>
              <p className="text-xs text-gray-600 mb-1">
                Cyber Security Officer
              </p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Administrator */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img
                src={tino}
                alt="Tinotenda Samanyanga"
                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-[#176ca7]"
              />
              <h3 className="text-base font-bold text-[#176ca7]">
                Tinotenda Samanyanga
              </h3>
              <p className="text-xs text-gray-600 mb-1">Administrator</p>
              <div className="flex space-x-2 mt-1">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#176ca7] text-xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f77c1c] text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Milestones Section */}
      <Milestones />
      <Footer2 />
    </div>
  );
};

export default About;
