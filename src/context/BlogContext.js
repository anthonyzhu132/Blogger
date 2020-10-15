import React from 'react';

// Context is to help set global state, and to pass down props to super nested components/children

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>
};