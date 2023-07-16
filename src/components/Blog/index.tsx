import React, { useEffect, useState } from "react";

import { FBlog } from "@/types/blogs";

import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { getBLogDetail } from "@/api/blog";
import ReactMarkdown from "react-markdown";
import Loading from "../Loading";
import CodeBlock from "../CodeBlock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import NeuButton from "../NeuContainer/NeuButton";

import { getMarkdown } from "@/utils/markdown";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<FBlog>(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    getMarkdown("/markdown/" + id + ".md")
      .then((res) => {
        console.log("res", res.data);
        setBlog({ content: res.data } as any);
      })
      .catch((err) => {
        console.log("err", err);
        setErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="toolbar">
        <NeuButton
          onClick={() => {
            navigate(`/blog/edit/${id}`, {
              state: blog,
            });
          }}
        >
          编辑测试
        </NeuButton>
        <NeuButton
          onClick={() => {
            navigate(`/blog/list`, {
              state: blog,
            });
          }}
        >
          返回
        </NeuButton>
      </div>

      <Loading visible={loading}>
        {blog ? (
          <>
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-info">
              <div className="blog-author">{blog.author}</div>
              <div className="blog-gmtCreate">{blog.gmtCreate}</div>
              <div className="blog-likes">{blog.likes}</div>
            </div>
            <ReactMarkdown
              className="blog-content"
              children={blog.content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  console.log("match", match);
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </>
        ) : (
          !loading && <ErrorPage message={errorMessage} />
        )}
      </Loading>
    </div>
  );
};

export default Blog;
