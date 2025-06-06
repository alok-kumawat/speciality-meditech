import React from 'react';

const BlogSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow overflow-hidden">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
