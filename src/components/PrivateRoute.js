// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? (
    <>
      <Navbar />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
