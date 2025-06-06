// === FILE: src/components/careers/CareersHero.jsx ===
import React from 'react';
import { motion } from 'framer-motion';

const CareersHero = ({ onExploreClick }) => {

  return (
    <section className="text-center pt-24 pb-16 px-8 bg-gray-50">
      <motion.h1
        className="text-3xl md:text-4xl font-bold leading-tight text-blue-800 mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join Our Team of Innovators
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        We’re building a culture where amazing people like you can do their best work. If you’re ready to grow your career and help others grow theirs, you’ve come to the right place. 
        <br /><br />Join us on our mission to innovate, collaborate, and make a meaningful impact every day.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        onClick={onExploreClick}
        className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-800 transition"
      >
        Explore Openings
      </motion.button>
    </section>
  );
};

export default CareersHero;
