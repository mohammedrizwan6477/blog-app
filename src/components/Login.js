import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ formData }));
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              style={{ marginTop: "16px" }}
              onClick={handleNavigate}
            >
              Signup
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
