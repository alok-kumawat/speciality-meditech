// === FILE: src/components/careers/ApplicationCTA.jsx ===
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationCTA = () => {
  return (
    <motion.section
     className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-8 mt-16 rounded-lg"
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Didn't find a suitable role?</h2>
        <p className="text-lg text-blue-100 mb-8">
          We’re always excited to meet new talent. If you think you’re a great fit, send us your resume!
        </p>
        <Link
          to="/careers/apply"
          className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
        >
          <Mail className="w-5 h-5" />
          Send Resume
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ApplicationCTA;
