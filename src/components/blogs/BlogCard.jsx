import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{blog.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          By {blog.author} • {new Date(blog.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">{blog.content}</p>
        <button
          onClick={onReadMore}
          className="mt-4 text-blue-600 font-semibold hover:underline cursor-pointer"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
