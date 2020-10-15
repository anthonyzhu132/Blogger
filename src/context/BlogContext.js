import React from 'react';

// Context is to help set global state, and to pass down props to super nested components/children

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: '#1' },
    { title: '#2' },
    { title: '#3' }
  ]

  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
};

export default BlogContext;