import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    users: JSON.parse(localStorage.getItem("users")) || [], // Load users from localStorage on init
  },
  reducers: {
    signup: (state, action) => {
      // Add the new user to the users array in Redux state
      state.users.push(action.payload);

      // Store the updated users list in localStorage
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      // Find the user by email and password
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (user) {
        state.isAuthenticated = true;
        state.user = user;

        // Store the logged-in user in localStorage
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Invalid username or password");
      }
    },
    logout: (state) => {
      // Logout user by resetting the state
      state.isAuthenticated = false;
      state.user = null;

      // Remove logged-in user from localStorage
      localStorage.removeItem("user");
    },
    loadUserFromLocalStorage: (state) => {
      const userData = localStorage.getItem("user");
      if (userData) {
        state.isAuthenticated = true;
        state.user = JSON.parse(userData);
      }
    },
  },
});

export const { signup, login, logout, loadUserFromLocalStorage } =
  authSlice.actions;
export default authSlice.reducer;
