import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-6 rounded-lg max-w-7xl mx-auto my-16 shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            Ready to Improve Your Medical Facility?
          </h2>
          <p className="text-blue-200 max-w-md">
            Contact Speciality Meditech today to get expert solutions tailored for your hospital or clinic.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition"
          aria-label="Contact Speciality Meditech"
        >
          Contact Us
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
