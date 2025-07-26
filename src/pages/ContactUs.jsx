import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = () => {
    // Let the form submit to getform.io
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }
      alert('Successfully submitted!');
      navigate('/contactus');
    }, 100); // Delay to allow getform.io to process
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      {/* Orange Section with Badge and Heading Side by Side on md+ */}
      <section className="bg-orange-500 flex-row items-center justify-center py-2  w-full">
        <span className="bg-white/30 text-white font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm">
          SEAMLESS. SECURE. SMART.
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Contact Us
        </h1>
      </section>
      {/* Contact Form */}
      <section className="flex justify-center items-center py-12 bg-white">
        <form
          ref={formRef}
          className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8 md:p-12"
          action="https://getform.io/f/adrgvexa"
          method="POST"
          onSubmit={handleSubmit}
        >
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
                name="firstName"
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
                name="lastName"
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
                name="phone"
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
                name="email"
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
              name="message"
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
      <Footer />
    </div>
  );
};

export default ContactUs;
