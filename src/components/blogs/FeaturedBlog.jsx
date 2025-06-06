import React from 'react';
import blogs from '../../data/blogsData';
import { motion } from 'framer-motion';

const FeaturedBlog = () => {
  const featured = blogs[0];

  return (
    <motion.div
      className="bg-gray-50 rounded-xl overflow-hidden mb-10 shadow-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={featured.image}
        alt={featured.title}
        className="w-full lg:h-80 md:h-70 sm:h-60 object-center"
      />
      <div className="p-6">
        <p className="text-sm text-gray-500">{featured.date}</p>
        <h2 className="text-2xl font-bold">{featured.title}</h2>
        <p className="mt-2 text-gray-700 line-clamp-2">{featured.content}</p>
      </div>
    </motion.div>
  );
};

export default FeaturedBlog;
