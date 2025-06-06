import React, { useState, useEffect } from 'react';
import BlogSkeleton from './BlogSkeleton';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import blogs from '../../data/blogsData';
import { motion } from 'framer-motion';

const BlogList = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsPerPage = 3;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(submittedSearchQuery.toLowerCase()) &&
        (category === 'All' || blog.category === category)
      );
      setFilteredBlogs(results);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [submittedSearchQuery, category]);

  const handleSearch = () => {
    setSubmittedSearchQuery(searchQuery);
    setCurrentPage(1);
    setSearchQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <motion.div
        variants={fadeInUp}
        className="flex justify-center mb-8 w-full"
      >
        <>
        <input
          type="text"
          placeholder="Search blogs..."
          className="lg:px-4 md:px-4 sm:px-8 py-2 border-2 w-1/3 shadow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          />
        <button
          onClick={handleSearch}
          className='bg-blue-800 text-white lg:px-4 md:px-6 sm:px-8 py-2 border-black border-t-2 border-r-2 border-b-2 w-1/4 shadow'
        >
          SEARCH
        </button>
        </>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(blogsPerPage).fill(0).map((_, idx) => <BlogSkeleton key={idx} />)
          : currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} onReadMore={() => setSelectedBlog(blog)} />
            ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded ${
                currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Blog Modal */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  );
};

export default BlogList;
