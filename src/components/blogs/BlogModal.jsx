import React from 'react';

const BlogModal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-0.5 right-1 text-gray-500 hover:text-red-500 text-3xl"
        >
          &times;
        </button>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold mt-4">{blog.title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          By {blog.author} • {new Date(blog.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogModal;
