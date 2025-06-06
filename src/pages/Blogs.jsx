import React, { useState } from 'react';
import BlogList from '../components/blogs/BlogList';
import BlogSidebar from '../components/blogs/BlogSidebar';
import FeaturedBlog from '../components/blogs/FeaturedBlog';
import { motion } from 'framer-motion';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <motion.div
      className="pt-24 pb-20 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Our Latest Blogs
      </motion.h1>

      <FeaturedBlog />

      <div className="lg:flex gap-8">
        <BlogSidebar selected={selectedCategory} onSelect={setSelectedCategory} />
        <main className="lg:w-3/4">
          <BlogList category={selectedCategory} />
        </main>
      </div>
    </motion.div>
  );
};

export default Blogs;
