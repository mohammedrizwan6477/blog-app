import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup({ formData }));
    navigate("/login");
  };

  const handleNavigate = () => {
    navigate("/login");
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
          Signup
        </Typography>
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
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
              Signup
            </Button>
            <Button
              variant="outlined"
              style={{ marginTop: "16px" }}
              onClick={handleNavigate}
            >
              SignIn
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
