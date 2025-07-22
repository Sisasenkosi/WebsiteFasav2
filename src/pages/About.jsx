import React from 'react';
import Header from '../components/Navbar';

const About = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Orange About Us Banner */}
      <section className="bg-[#f77c1c] flex flex-col items-center justify-center py-12 w-full">
        <span className="bg-white/30 text-white font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm">
          SEAMLESS. SECURE. SMART.
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          ABOUT US
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
    </div>
  );
};

export default About;
