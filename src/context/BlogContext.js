import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

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
        content: action.payload.content
      }
    ];
    case 'edit_blogpost':
      return state.map((blogPost) => {
        if(blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case 'get_blogposts':
      return action.payload;  
    default:
      return state;
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    if(callback) {
      callback();
    };
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content}});
    if(callback) {
      callback()
    }
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, [])