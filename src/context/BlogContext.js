import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

// Context is to help set global state, and to pass down props to super nested components/children
// Context WRAPS entire App.js in another component, allowing it to pass props down into Apps -> Parent -> Child and any other inner child.

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length +1}`}];
    default:
      return state;
  }
}

const addBlogPost = () => {
  dispatch({ type: 'add_blogpost'})
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])