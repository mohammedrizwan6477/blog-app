// route.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddBlog from './components/Blog/AddBlog';
import BlogDetails from './components/Blog/BlogDetails';

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/addBlog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />
      <Route path="/addBlog/:id" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
    </Routes>
  </Router>
);

export default Routing;
