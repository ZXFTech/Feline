import React from "react";

import Tag from "../Tag";

import blog from "./blog.json";

import "./index.css";

interface IBlog {
  title: string;
  tags: string;
  author: string;
  gmtCreate: string;
  likes: number;
  content: string;
}

const Blog = () => {
  let blogContent: IBlog = blog;
  return (
    <div>
      <h1 className="blog-title">{blogContent.title}</h1>
      <div className="blog-tags">
        {blogContent.tags.split(" ").map((item) => (
          <Tag color="#fff">#{item}</Tag>
        ))}
      </div>
      <div className="blog-info">
        <div className="blog-author">{blogContent.author}</div>
        <div className="blog-gmtCreate">{blogContent.gmtCreate}</div>
        <div className="blog-likes">{blogContent.likes}</div>
      </div>
      <div className="blog-content">{blogContent.content}</div>
    </div>
  );
};

export default Blog;
