import React from 'react';

const categories = ['All', 'Technology', 'Wellness', 'Research'];

const BlogSidebar = ({ selected, onSelect }) => {
  return (
    <aside className="hidden lg:block lg:w-1/4 pr-4">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <ul className="space-y-2 text-gray-700">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer px-3 py-2 rounded transition duration-200 ${
              selected === cat
                ? 'bg-blue-100 text-blue-600 font-semibold'
                : 'hover:text-blue-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidebar;
