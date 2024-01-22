import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogData(data.results))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <>
    <div className='flex justify-center items-center flex-col leading-10'>
      <h1 className='text-4xl font-bolder'>Featured Blog</h1>
      <p>If you’ve found our Theme to be helpful.</p>
    </div>
    <div className=' flex justify-between flex-wrap mx-20  space-y-3  mt-28'>
      {blogData.map(blog => (
        <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/blog/${blog.id}`}>
            <img className="w-full h-48 object-cover rounded-t-lg" src={blog.image} alt={blog.title} />
          </Link>
          <div className="p-6">
            <a className="text-blue-500 hover:underline">
              <h5 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                {blog.title}
              </h5>
            </a>
            <p className="mb-4 text-gray-700 dark:text-gray-400">
              { blog.content.length > 30
    ? blog.content.slice(0, 30) + '...'
    : blog.content}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(blog.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Blog;
