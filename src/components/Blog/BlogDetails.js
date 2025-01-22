import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();

  const { blogs } = useSelector((state) => state.blogs);

  const blog = blogs.find((item) => item.blogId === params.id);
  console.log(blog);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="400"
          image={blog.imgUrl}
          alt="Blog Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            {blog.title}
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            {blog.category}
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            {blog.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetails;
