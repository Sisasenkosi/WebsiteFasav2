import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import happy from '../assets/happyWoman.jpeg';
import qrscan from '../assets/qrscan.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-20 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Headline */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="bg-white/20 text-orange-300 font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm inline-block">
                SEAMLESS. SECURE. SMART.
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-2">
                Smart Locker
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-2">
                Solutions That
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Deliver Convenience
              </h1>
            </motion.div>
            {/* Right: Sub-text and Button */}
            <motion.div
              className="flex justify-end px-0 sm:px-4 mt-8 lg:mt-0"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-md text-left mr-0 lg:mr-4">
                <p className="text-sm text-gray-200 mb-4">
                  Streamline your last-mile operations. Deliver multiple
                  packages at a single smart locker hub and eliminate the need
                  for redelivery. Save time, reduce costs, and improve delivery
                  success rates.
                </p>
                <Link
                  to="/contactus"
                  className="bg-[#0e6399] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition inline-block"
                >
                  Contact Us &gt;
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overlapping Card Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
            {/* Left: Orange Card */}
            <motion.div
              className="bg-orange-500 rounded-xl shadow-xl p-6 sm:p-8 w-full lg:w-2/5 relative overflow-hidden mb-8 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.7 }}
            >
              <svg
                className="absolute -bottom-4 -right-4 z-0 opacity-20 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none"
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
                <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  Easy Integration with Delivery Partners
                </div>
                <p className="mb-4 text-sm md:text-base">
                  We revolutionize how packages are collected, received, and
                  managed—with our intuitive, robust, and optimized smart locker
                  solutions.
                </p>
                <button className="bg-[#0e6399] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Call Now For Service &gt;
                </button>
              </div>
            </motion.div>

            {/* Right: Stats Cards on an Elevated Card */}
            <motion.div
              className="w-full lg:w-3/5 flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-2xl grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-lg h-64 p-4 sm:p-8">
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-500 mb-1">
                    980+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Successful Services
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-500 mb-1">
                    900+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Satisfied Clients
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-500 mb-1">
                    50+
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Locations
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center shadow-md flex flex-col justify-center items-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-500 mb-1">
                    100%
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">
                    Quality Service
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us / Welcome Section */}
      <section className="py-12 bg-white">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-2 sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={qrscan}
                alt="Smart Locker"
                className="rounded-xl w-60 h-64 sm:w-72 sm:h-80 object-cover shadow-lg"
              />
            </motion.div>
          </div>
          {/* Right: Text */}
          <div className="w-full mt-8 md:mt-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
              Welcome to the World of Endless Possibilities
            </h2>
            <p className="text-gray-700 mb-4">
              At Fasamartech, we're transforming the way packages are delivered
              and received. Our intelligent locker solutions are designed to
              eliminate delivery friction, save time, and maximize
              convenience—for everyone involved in the logistics chain.
            </p>
            <ul className="mb-4 text-gray-700 text-sm space-y-2">
              {[
                'Experienced, Reliable, and Ready to Serve',
                'Your dependable Partner for the Long Haul',
                'Our Commitment to Quality',
                'Serving You with Integrity',
              ].map((text, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <Link
              to="/aboutus"
              className="bg-[#0e6399] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 w-full sm:w-1/2 md:w-1/3 transition inline-block text-center"
            >
              Find out more &gt;
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f7f1e9]">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
            Why Choose Our Smart Lockers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              className="relative bg-white border border-orange-100 rounded-2xl p-6 sm:p-8 flex flex-col min-h-[220px] shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-6 left-6 bg-[#f77c1c] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl shadow-md border-4 border-white">
                🚚
              </div>
              <h3 className="font-bold text-[#176ca7] text-lg mt-8 mb-3">
                Courier & Delivery Services
              </h3>
              <ul className="text-gray-700 text-xs space-y-2">
                <li>
                  <span className="font-semibold">
                    Efficient Last-Mile Delivery
                  </span>{' '}
                  : Drop multiple packages in one trip.
                </li>
                <li>
                  <span className="font-semibold">Secure & Tamper-Proof</span> :
                  Eliminate package theft with PIN/QR code access.
                </li>
                <li>
                  <span className="font-semibold">Seamless Integration</span> :
                  Compatible with major courier software for real-time tracking
                  and notifications.
                </li>
              </ul>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="relative bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col min-h-[220px] shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute -top-6 left-6 bg-[#176ca7] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl shadow-md border-4 border-white">
                🛒
              </div>
              <h3 className="font-bold text-[#176ca7] text-lg mt-8 mb-3">
                For E-Commerce Businesses
              </h3>
              <ul className="text-gray-700 text-xs space-y-2">
                <li>
                  <span className="font-semibold">Reduce Delivery Failure</span>{' '}
                  : Customers pick up orders at their convenience, lowering
                  missed delivery rates.
                </li>
                <li>
                  <span className="font-semibold">
                    Contactless & Sustainable
                  </span>{' '}
                  : Cut down on redelivery attempts .
                </li>
                <li>
                  <span className="font-semibold">
                    Branded Pickup Experience
                  </span>{' '}
                  : Customizable locker with your logo for a professional touch.
                </li>
              </ul>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="relative bg-white border border-orange-100 rounded-2xl p-6 sm:p-8 flex flex-col min-h-[220px] shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute -top-6 left-6 bg-[#f77c1c] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl shadow-md border-4 border-white">
                🏢
              </div>
              <h3 className="font-bold text-[#176ca7] text-lg mt-8 mb-3">
                For Property Managers & Offices
              </h3>
              <ul className="text-gray-700 text-xs space-y-2">
                <li>
                  <span className="font-semibold">
                    Automated Package Management
                  </span>{' '}
                  : No more cluttered mailrooms or front desk bottlenecks.
                </li>
                <li>
                  <span className="font-semibold">Secure & Organized</span> :
                  Residents retrieve parcels anytime with a unique access code.
                </li>
                <li>
                  <span className="font-semibold">Scalable Solutions</span> :
                  Ideal for apartments, co-working spaces, and corporate
                  campuses.
                </li>
              </ul>
            </motion.div>
            {/* Card 4 */}
            <motion.div
              className="relative bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col min-h-[220px] shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="absolute -top-6 left-6 bg-[#176ca7] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl shadow-md border-4 border-white">
                👥
              </div>
              <h3 className="font-bold text-[#176ca7] text-lg mt-8 mb-3">
                For End-Consumers
              </h3>
              <ul className="text-gray-700 text-xs space-y-2">
                <li>
                  <span className="font-semibold">24/7 Access to Lockers</span>{' '}
                  : Pick up your parcel any time — no need to adjust your
                  routine or work hours.
                </li>
                <li>
                  <span className="font-semibold">
                    Affordable and Transparent Pricing
                  </span>{' '}
                  : No hidden fees — competitive pricing for top-tier service.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="py-12 bg-[#0e6399] my-8">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-2 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left: Text and List */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Started Today?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-[#f77c1c] mr-2 mt-1 rounded-full"></span>
                <div>
                  <span className="font-bold">
                    Couriers & Logistics Providers
                  </span>{' '}
                  – Optimize your delivery network.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-[#f77c1c] mr-2 mt-1 rounded-full"></span>
                <div>
                  <span className="font-bold">E-Commerce Brands</span> – Enhance
                  customer satisfaction with hassle-free pickups.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-[#f77c1c] mr-2 mt-1 rounded-full"></span>
                <div>
                  <span className="font-bold">Property Managers</span> – Upgrade
                  your building’s package handling system.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-[#f77c1c] mr-2 mt-1 rounded-full"></span>
                <div>
                  <span className="font-bold">Consumers</span> – Enjoy
                  stress-free deliveries near you.
                </div>
              </li>
            </ul>
            <Link
              to="/contactus"
              className="bg-white text-[#f77c1c] font-bold px-6 py-2 rounded-lg shadow hover:bg-orange-100 transition inline-block"
            >
              Contact Us
            </Link>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
            <motion.img
              src={happy}
              alt="Smart Lockers"
              className="w-48 h-56 sm:w-72 sm:h-80 object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
