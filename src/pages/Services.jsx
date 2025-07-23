import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: (
      <span className="bg-gradient-to-tr from-orange-500 to-[#176ca7] rounded-full p-4 text-white text-2xl">
        <i className="fas fa-shield-alt"></i>
      </span>
    ),
    title: 'Secure & Reliable',
    desc: 'Advanced security features ensure your packages are safe and protected at all times.',
  },
  {
    icon: (
      <span className="bg-gradient-to-tr from-orange-500 to-[#176ca7] rounded-full p-4 text-white text-2xl">
        <i className="fas fa-clock"></i>
      </span>
    ),
    title: '24/7 Availability',
    desc: 'Access your packages anytime, anywhere with our round-the-clock service availability.',
  },
  {
    icon: (
      <span className="bg-gradient-to-tr from-orange-500 to-[#176ca7] rounded-full p-4 text-white text-2xl">
        <i className="fas fa-bolt"></i>
      </span>
    ),
    title: 'Fast & Efficient',
    desc: 'Streamlined processes that save time for both businesses and consumers.',
  },
];

const solutions = [
  {
    icon: (
      <span className="bg-blue-500 rounded-full p-3 text-white text-xl">
        <i className="fas fa-truck"></i>
      </span>
    ),
    title: 'Couriers & Delivery Services',
    desc: 'Efficient Last-Mile Delivery - Cut manual deliveries by reducing waiting times',
    points: [
      'Secure & Tamper Proof delivery system',
      'Seamless integration with existing platforms',
      'Contactless & Sustainable operations',
      'Real time tracking and notifications',
    ],
  },
  {
    icon: (
      <span className="bg-green-500 rounded-full p-3 text-white text-xl">
        <i className="fas fa-shopping-cart"></i>
      </span>
    ),
    title: 'For E-Commerce Businesses',
    desc: 'Reduce Delivery Failures - Customers pick up orders at their convenience',
    points: [
      'Contactless & Sustainable pickup experience',
      'Branded Pickup Experience for your customers',
      'Reduced failed delivery attempts',
      'Improved customer satisfaction scores',
    ],
  },
  {
    icon: (
      <span className="bg-purple-500 rounded-full p-3 text-white text-xl">
        <i className="fas fa-building"></i>
      </span>
    ),
    title: 'For Property Managers & Offices',
    desc: 'Automated Package Management - Relieves delivery tension from couriers',
    points: [
      'Streamline Management of all deliveries',
      'Cost-efficient package handling',
      'Enhanced building security',
      'Tenant satisfaction improvement',
    ],
  },
  {
    icon: (
      <span className="bg-orange-500 rounded-full p-3 text-white text-xl">
        <i className="fas fa-user-friends"></i>
      </span>
    ),
    title: 'For End-Consumers',
    desc: 'Automated Package Management - Let your tenants enjoy a streamlined delivery',
    points: [
      'Secure & Convenient 24/7 access',
      'Stress-free pickup at your convenience',
      'Contactless Experience for safety',
      'Multiple location accessibility',
    ],
  },
];

const Services = () => (
  <div className="bg-white min-h-screen">
    <div className="bg-orange-500 ">
      <Header />
      {/* Our Smart Locker Solutions */}
      <section className="bg-orange-500 flex-row items-center justify-center py-2  w-full">
        <span className="bg-white/30 text-white font-semibold px-4 py-2 rounded mb-4 tracking-widest text-xs md:text-sm">
          SEAMLESS. SECURE. SMART.
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Services
        </h1>
      </section>
    </div>
    <section className="py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          <span className="text-orange-500"> Our Smart Locker Solutions</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          We provide customized solutions for different industries, ensuring
          optimal efficiency and user satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-8">
              <div className="flex items-center mb-3">
                {sol.icon}
                <div className="ml-3 font-bold text-base">{sol.title}</div>
              </div>
              <div className="text-gray-700 text-sm mb-3">{sol.desc}</div>
              <ul className="list-none space-y-2 pl-0">
                {sol.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-500 text-sm"
                  >
                    <span className="text-orange-500 mr-2">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Why Choose Our Services */}
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          <span className="text-orange-500">Why Choose Our Services?</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Our solutions are built with cutting-edge technology and designed to
          meet the evolving needs of modern logistics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center"
            >
              {s.icon}
              <div className="font-bold text-lg mt-4 mb-2 text-center">
                {s.title}
              </div>
              <div className="text-gray-500 text-sm text-center">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Gradient Banner */}
    <section className="bg-gradient-to-tr from-orange-500 to-[#176ca7] py-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Delivery Experience?
        </h3>
        <p className="text-white text-lg">
          Get started with our smart locker solutions today and experience the
          future of package delivery.
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
