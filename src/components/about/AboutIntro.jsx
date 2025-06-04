// src/components/about/AboutIntro.jsx
import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white dark:bg-white transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We are a trusted provider of innovative healthcare solutions. Our mission is to ensure
          that hospitals, clinics, and medical professionals have access to reliable, cutting-edge
          equipment to serve their patients better.
        </motion.p>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Our team of experts is dedicated to continuous innovation, ethical practices, and
          uncompromising quality. Whether it's critical care, diagnostics, or everyday clinical
          operations — we deliver solutions that empower care and improve outcomes.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutIntro;
