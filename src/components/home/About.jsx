import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://media.istockphoto.com/id/1944966768/photo/hospital-bed-in-recovery-room-with-copy-space-3d-rendering.jpg?s=612x612&w=0&k=20&c=Z1hLn3KEiHooDZNHOe-deUTycUx4x8o1Q0Ibf0EE0xs="
            alt="About Speciality Meditech"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About Speciality Meditech
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Established with a vision to deliver premium medical solutions, Speciality Meditech is a trusted name in the healthcare equipment sector. We specialize in providing high-quality medical furniture, hospital beds, and other healthcare essentials.
          </p>
          <p className="text-gray-600 text-lg">
            With decades of experience, we continue to lead the way with innovation, integrity, and a deep commitment to excellence in the healthcare industry.
          </p>
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/about">
                  <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
                    More About Us
                  </button>
                </Link>
              </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
