import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addBlog } from "../../redux/blogSlice";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    blogId: "",
    title: "",
    content: "",
    category: "",
    imgUrl: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(formData));
    navigate("/");
    setFormData({
      blogId: "",
      title: "",
      content: "",
      category: "",
      imgUrl: "",
    });
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Blog
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Blog Number"
          name="blogId"
          value={formData.blogId}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* Title Input */}
        <TextField
          fullWidth
          label="Blog Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Content Input */}
        <TextField
          fullWidth
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          margin="normal"
          required
          multiline
          rows={6}
        />

        {/* Category Input */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Lifestyle">Lifestyle</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Image Url"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
          margin="normal"
          required
          rows={6}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Blog
        </Button>
      </form>
    </Container>
  );
};

export default AddBlog;
