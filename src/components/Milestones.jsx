import React from 'react';
import { motion } from 'framer-motion';

const Milestones = () => {
  return (
    // Our Milestones Section
    <div>
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f77c1c] text-center mb-2">
            Our Milestones
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Celebrating our journey of innovation, excellence, and continuous
            growth through remarkable achievements
          </p>
          <div className="relative flex flex-col items-center">
            {/* Timeline vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 z-0"
              style={{ transform: 'translateX(-50%)' }}
            />
            <div className="flex flex-col gap-16 w-full">
              {/* Milestone 1 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center w-full relative"
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        EXCELLENCE
                      </span>
                      <span className="text-xs text-gray-400">SEP 2024</span>
                    </div>
                    <div className="font-bold text-[#176ca7] text-lg mb-1">
                      Innovation Excellence Award
                    </div>
                    <div className="text-xs text-gray-500">
                      Recognized for outstanding technological innovation and
                      breakthrough solutions in parcel delivery.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:w-0 md:mx-8 z-10">
                  <div className="bg-[#f77c1c] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                    <i className="fas fa-crown"></i>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:flex"></div>
              </motion.div>
              {/* Milestone 2 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center w-full relative"
              >
                <div className="md:w-1/2 hidden md:flex"></div>
                <div className="flex flex-col items-center md:w-0 md:mx-8 z-10">
                  <div className="bg-[#f77c1c] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                    <i className="fas fa-glass-cheers"></i>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        LEADERSHIP
                      </span>
                      <span className="text-xs text-gray-400">NOV 2024</span>
                    </div>
                    <div className="font-bold text-[#176ca7] text-lg mb-1">
                      Requirements Analysis
                    </div>
                    <div className="text-xs text-gray-500">
                      Successfully gathered and analyzed customer requirements,
                      setting the foundation for our product development.
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Milestone 3 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center w-full relative"
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        TECHNOLOGY
                      </span>
                      <span className="text-xs text-gray-400">Jan 2025</span>
                    </div>
                    <div className="font-bold text-[#176ca7] text-lg mb-1">
                      MVP Building
                    </div>
                    <div className="text-xs text-gray-500">
                      We started building our MVP and successfully completed the
                      first phase of development.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:w-0 md:mx-8 z-10">
                  <div className="bg-[#f77c1c] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:flex"></div>
              </motion.div>
              {/* Milestone 4 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex items-center w-full relative"
              >
                <div className="md:w-1/2 hidden md:flex"></div>
                <div className="flex flex-col items-center md:w-0 md:mx-8 z-10">
                  <div className="bg-[#f77c1c] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        SUCCESS
                      </span>
                      <span className="text-xs text-gray-400">SEP 2024</span>
                    </div>
                    <div className="font-bold text-[#176ca7] text-lg mb-1">
                      Piloting
                    </div>
                    <div className="text-xs text-gray-500">
                      Product roled out for testing with select customers,
                      gathering valuable feedback for improvements.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Milestones;
