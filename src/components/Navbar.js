import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Blog Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Trending Blogs
          </Typography>

          {/* Navigation Links */}
          <div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/addBlog">
              Add Blog
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
