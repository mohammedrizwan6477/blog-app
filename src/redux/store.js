import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUserFromLocalStorage } from "../auth/authSlice";
import blogReducer from "./blogSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
});

store.dispatch(loadUserFromLocalStorage());

export default store;
