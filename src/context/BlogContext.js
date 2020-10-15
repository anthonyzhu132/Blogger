import React, { useState } from 'react';

// Context is to help set global state, and to pass down props to super nested components/children

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `#${blogPosts.length + 1}` }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>{children}</BlogContext.Provider>
};

export default BlogContext;