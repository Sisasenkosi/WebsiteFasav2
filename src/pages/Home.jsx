import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-16 pb-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Part: Headline and Subtext */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Headline */}
            <div>
              <span className="bg-white/20 text-orange-300 font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm inline-block">
                SEAMLESS. SECURE. SMART.
              </span>
              <h1 className="text-xl lg:text-5xl font-semibold">
                Smart Locker
              </h1>
              <h1 className="text-xl lg:text-5xl font-semibold">
                Solutions That
              </h1>
              <h1 className="text-xl lg:text-5xl font-semibold">
                Deliver Convenience
              </h1>
            </div>
          </div>

          {/* Right: Sub-text and Button */}
          <div className="relative z-10 max-w-7xl mx-auto flex justify-end px-4 mt-0">
            <div className="max-w-md text-left mr-4">
              <p className="text-sm text-gray-200 mb-4">
                Streamline your last-mile operations. Deliver multiple packages
                at a single smart locker hub and eliminate the need for
                redelivery. Save time, reduce costs, and improve delivery
                success rates.
              </p>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Contact Us &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Card Section */}
      <section className="relative -mt-30 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-1">
            {/* Left: Orange Card */}
            <div className="bg-orange-500 rounded-xl shadow-xl p-8 lg:w-2/5 w-full relative overflow-hidden">
              <svg
                className="absolute -bottom-4 -right-4 z-0 opacity-20 w-40 h-40 pointer-events-none"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  stroke="#fff"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="36"
                  stroke="#fff"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="18"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="relative z-10 text-white">
                <div className="inline-block bg-black/5 text-white font-semibold px-4 py-1 rounded mb-2">
                  Our Service
                </div>
                <div className="text-xl md:text-2xl font-bold mb-2">
                  Easy Integration with Delivery Partners
                </div>
                <p className="mb-4 text-sm md:text-base">
                  We revolutionize how packages are collected, received, and
                  managed—with our intuitive, robust, and optimized smart locker
                  solutions.
                </p>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Call Now For Service &gt;
                </button>
              </div>
            </div>

            {/* Right: Stats Cards on an Elevated Card */}
            <div className="lg:w-3/5 w-full flex justify-center items-center">
              <div className="bg-white rounded-xl shadow-2xl grid grid-cols-2 grid-rows-2 gap-4 w-115 h-72 p-8">
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-orange-500 mb-1">
                    980+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Successful Services
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-orange-500 mb-1">
                    900+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Satisfied Clients
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-orange-500 mb-1">
                    50+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Locations
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-orange-500 mb-1">
                    100%
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Quality Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Choose Our Smart Lockers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-2">🚚</div>
              <div className="font-bold mb-1">Courier & Delivery Services</div>
              <div className="text-gray-600 text-sm">
                Efficient Last-Mile Delivery, Secure & Tamper-Proof, Seamless
                Integration
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-2">🛒</div>
              <div className="font-bold mb-1">For E-Commerce Businesses</div>
              <div className="text-gray-600 text-sm">
                Reduce Delivery Failure, Contactless & Sustainable, Branded
                Pickup Experience
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-2">🏢</div>
              <div className="font-bold mb-1">
                For Property Managers & Offices
              </div>
              <div className="text-gray-600 text-sm">
                Automated Package Management, Secure & Organized, Scalable
                Solutions
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-2">👥</div>
              <div className="font-bold mb-1">For End-Consumers</div>
              <div className="text-gray-600 text-sm">
                Automated Package Management, Secure & Organized, Scalable
                Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-orange-500 rounded-lg my-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-8 gap-8 md:gap-0">
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
            <button className="bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-orange-800 transition">
              Contact Us
            </button>
          </div>
        </div>
        {/* Placeholder for image or illustration */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-56 h-56 bg-gray-200 rounded-xl shadow-lg hidden md:block" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
