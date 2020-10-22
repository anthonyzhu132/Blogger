import createDataContext from './createDataContext';

// Context is to help set global state, and to pass down props to super nested components/children
// Context WRAPS entire App.js in another component, allowing it to pass props down into Apps -> Parent -> Child and any other inner child.

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost' :
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [...state, { 
        id: Math.floor(Math.random() * 9999), 
        title: action.payload.title,
        contenet: action.payload.content
      }
    ];
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title: title, content: content }});
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])