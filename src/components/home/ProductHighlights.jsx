import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Hospital Beds',
    description: 'Ergonomic and durable beds designed for patient comfort and caregiver efficiency.',
    image: 'https://media.istockphoto.com/id/1363522308/photo/hospital-interior-in-recovery-or-inpatient-room.jpg?s=612x612&w=0&k=20&c=b4_AugNP2BHPtmPzsDEzXsuvvsKK-HAcejL3YHW2BCQ=',
  },
  {
    title: 'OT Tables',
    description: 'Precision-engineered operating tables to support complex surgical procedures.',
    image: 'https://media.istockphoto.com/id/1697813537/photo/robotic-assisted-surgery-in-operating-room.jpg?s=612x612&w=0&k=20&c=R48Ib7Ct2bQjHKfEZelIS7ePp2YulpjkzRdIYd9wrtQ=',
  },
  {
    title: 'Patient Transport',
    description: 'Safe and efficient mobility solutions for patient transfer within medical facilities.',
    image: 'https://media.istockphoto.com/id/1717663380/photo/female-doctor-comes-to-colleague-and-elderly-patient-in-clinic-corridor.jpg?s=612x612&w=0&k=20&c=7Mu8h1uN2guLNRiTX0RfjLcI_S0BIEwWsJyezK2Xxzg=',
  },
];

const ProductHighlights = () => {
  return (
    <section className="bg-gray-50 py-20" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <p className="text-gray-600 mb-10 text-lg">
          Explore our top medical furniture designed with innovation and quality.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
