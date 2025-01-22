import { createSlice } from "@reduxjs/toolkit";

// Initial state for the blogs
const initialState = {
  blogs: [],
};

// Create the slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Action to add a new blog
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});

// Export the actions from the slice
export const { addBlog } = blogSlice.actions;

// Export the reducer to be used in the store
export default blogSlice.reducer;
