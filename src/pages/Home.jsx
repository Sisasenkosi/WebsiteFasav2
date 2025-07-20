import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[400px] flex flex-col justify-center items-start px-6 md:px-24 py-16">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-2xl">
          <span className="bg-white/20 text-orange-300 font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm inline-block">
            SEAMLESS. SECURE. SMART.
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Smart Locker Solutions That Deliver Convenience
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Streamline your last-mile operations. Deliver multiple packages at a
            single smart locker hub and eliminate the need for redelivery. Save
            time, reduce costs, and improve delivery success rates.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Contact Us
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Call Now For Service
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="flex flex-wrap justify-center gap-8 py-12 bg-white">
        <div className="bg-white rounded-xl shadow-lg p-8 w-64 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">980+</div>
          <div className="text-gray-700 font-semibold">Successful Services</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 w-64 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">900+</div>
          <div className="text-gray-700 font-semibold">Satisfied Clients</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 w-64 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
          <div className="text-gray-700 font-semibold">Locations</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 w-64 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
          <div className="text-gray-700 font-semibold">Quality Service</div>
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
