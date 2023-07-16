import React, { useEffect, useState } from "react";

import { addBlog, getBlogList } from "@/api/blog";
import { FBlog } from "@/types/blogs";

import JSONBlogList from "./blogList.json";
import Breviary from "./Breviary";

import "./index.scss";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { getMarkdownList } from "@/utils/markdown";

export const BlogList = () => {
  const [loading, setLoading] = useState(false);

  const [blogList, setBlogList] = useState<string[]>([]);

  const [pageSize, setPageSize] = useState(20);

  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);

  const onBlogUpload = () => {
    const blog = {
      title: "吃饭",
      content:
        '```javascript\ntags: [\n{ name: "react" },\n{ name: "cat" }\n```',
      tags: [
        { name: "react" },
        { name: "cat" },
        { name: "food" },
        { name: "test" },
      ],
      likes: 10,
    };
    addBlog(blog)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onBLogUpdate = () => {
    setLoading(true);

    getMarkdownList()
      .then((res: any) => {
        console.log("res", res);
        const list = res.data || [];
        console.log("list", list);
        setBlogList(list);
        setTotal(list.length || 0);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    onBLogUpdate();
  }, []);

  return (
    <div>
      <button onClick={onBlogUpload}>上传</button>
      <button onClick={onBLogUpdate}>刷新</button>
      <Loading visible={loading}>
        <div className="list-container">
          {blogList.length ? (
            blogList.map((title, index: number) => {
              return <Breviary key={title + index} title={title} />;
            })
          ) : (
            <div>暂无博客</div>
          )}
        </div>
      </Loading>
    </div>
  );
};
