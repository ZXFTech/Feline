import { FBlog } from "@/types/blogs";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NeuContainer from "../NeuContainer";
import Tag from "../Tag";

import "./index.scss";

interface Props {
  blog: FBlog;
}

const Breviary = ({
  blog: { title, id, author, gmtCreate, content },
}: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/detail/${id}`);
  };
  return (
    <NeuContainer
      type="common"
      hover="protuberant"
      className="blog-breviary"
      onClick={handleClick}
    >
      <h2 className="breviary-title">{title}</h2>
      <div className="breviary-author-date">
        <span className="breviary-author">{author}</span>
        <span className="breviary-date">{gmtCreate}</span>
      </div>
      {/* <div className="breviary-tags">
        {tags.map((tag) => (
          <Tag key={tag.content} color={tag.color}>
            {tag.content}
          </Tag>
        ))}
      </div> */}
      <div className="breviary-content">{content.slice(0, 200)}</div>
    </NeuContainer>
  );
};

export default Breviary;
