import React, { useEffect, useState } from "react";

import { getBlogList } from "@/api/blogs";
import { FBlog } from "@/types/blogs";

import JSONBlogList from "./blogList.json";
import Breviary from "./Breviary";

import "./index.css";
import Pagination from "../Pagination";

console.log("JSONBlogList", JSONBlogList);

export const BlogList = () => {
  const [loading, setLoading] = useState(false);

  const [blogList, setBlogList] = useState<FBlog[]>([]);

  const [pageSize, setPageSize] = useState(20);

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setLoading(true);

    getBlogList(pageNum, pageSize)
      .then((res) => {
        console.log("res", res);
        setBlogList(JSONBlogList);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <div className="list-container">
        {blogList.length ? (
          blogList.map((blog, index: number) => {
            return <Breviary key={blog.blogId} blog={blog} />;
          })
        ) : (
          <div>暂无博客</div>
        )}
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};
