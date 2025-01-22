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
  const { blogs } = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  console.log(blogs);
  if (!Array.isArray(blogs)) {
    return <div>No Blogs</div>; 
  }

  const blogDetails = (blogId) => {
    console.log("blogId:", blogId);
    navigate(`/addBlog/${blogId}`);
  };

  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <Box display="flex" flexWrap="wrap" justifyContent="start" gap={2}>
        {blogs.map((blog, index) => {
          const truncateContent = (content, maxLength) => {
            return content.length > maxLength
              ? `${content.substring(0, maxLength)}...`
              : content;
          };

          const titleContent = (content,maxLength) => {
            return content.length > maxLength
            ? `${content.substring(0, maxLength)}...`
              : content;
          }

          return (
            <Card
              key={blog.blogId}
              sx={{
                maxWidth: 345,
                boxShadow: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height={200}
                width={200}
                image={blog.imgUrl}
                alt="Blog Image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {titleContent(blog.title, 40)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncateContent(blog.content, 230)}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  onClick={() => blogDetails(blog.blogId)}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default Dashboard;
