import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // Accessing blogs from the Redux store
  const { blogs } = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  console.log(blogs);
  // Ensure blogs is an array before mapping
  if (!Array.isArray(blogs)) {
    return <div>No Blogs</div>; // Fallback message if blogs data is not available
  }

  const blogDetails = (blogId) => {
    console.log("blogId:", blogId);
    navigate(`/addBlog/${blogId}`);
  };

  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <Box display="flex" flexWrap="wrap" justifyContent="start" gap={2}>
        {blogs.map((blog, index) => (
          <Card
            key={blog.blogId}
            sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}
          >
            <CardMedia
              component="img"
              height={150}
              width={200}
              image={blog.imgUrl}
              alt="Blog Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.content} 
              </Typography>
            </CardContent>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => blogDetails(blog.blogId)}
              >
                Read More
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Dashboard;
