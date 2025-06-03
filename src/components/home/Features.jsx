import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaCheckCircle, FaTruck, FaHandsHelping } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaCogs className="text-5xl text-blue-600 mb-4" />,
    title: 'Advanced Technology',
    description: 'Cutting-edge machinery ensures top-notch manufacturing precision and efficiency.',
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-5xl text-green-600 mb-4" />,
    title: 'Quality Assurance',
    description: 'Every product goes through rigorous quality control before dispatch.',
  },
  {
    id: 3,
    icon: <FaTruck className="text-5xl text-orange-500 mb-4" />,
    title: 'Timely Delivery',
    description: 'We value time, ensuring prompt deliveries to all our clients worldwide.',
  },
  {
    id: 4,
    icon: <FaHandsHelping className="text-5xl text-purple-600 mb-4" />,
    title: 'Dedicated Support',
    description: 'Our team provides 24/7 customer service and technical assistance.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We take pride in offering industry-leading features that define excellence and reliability.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map(({ id, icon, title, description }, index) => (
            <motion.div
              key={id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                {icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
