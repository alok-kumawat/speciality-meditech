// === FILE: src/components/careers/WhyJoinUs.jsx ===
import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaGlobe, FaBookOpen, FaHandsHelping, FaHeartbeat, FaRocket } from 'react-icons/fa';

const benefits = [
  {
    title: 'Flexible Work Hours',
    description: 'Balance your work and personal life with our flexible schedule.',
    icon: <FaClock className="text-4xl text-blue-600" />,
  },
  {
    title: 'Remote Friendly',
    description: 'Work from anywhere, whether it’s home or your favorite café.',
    icon: <FaGlobe className="text-4xl text-green-600" />,
  },
  {
    title: 'Learning Opportunities',
    description: 'Get access to courses, certifications, and growth resources.',
    icon: <FaBookOpen className="text-4xl text-red-600" />,
  },
  {
    title: 'Collaborative Culture',
    description: 'We foster a positive, inclusive environment with strong team support.',
    icon: <FaHandsHelping className="text-4xl text-purple-600" />,
  },
  {
    title: 'Health Benefits',
    description: 'Comprehensive health plans and wellness programs for all employees.',
    icon: <FaHeartbeat className="text-4xl text-pink-600" />,
  },
  {
    title: 'Career Growth',
    description: 'We support your journey with mentorship, feedback, and promotions.',
    icon: <FaRocket className="text-4xl text-yellow-600" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const WhyJoinUs = () => {
  return (
    <section className="py-16 px-8 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Join Us?
      </motion.h2>
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Discover the values and benefits that make our workplace an amazing place to grow and thrive.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinUs;
