import React, { CSSProperties, useEffect, useState } from "react";

import MDEditor from "for-editor";
import { useLocation, useNavigate } from "react-router-dom";
import NeuContainer from "../NeuContainer";
import { addBlog, updateBlog } from "@/api/blogs";
import { uploadImg } from "@/api/file";
import { FBlog } from "@/types/blogs";

import "./index.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/theme/themeSlice";
import { calcFontColor } from "@/hooks/global";
import { message } from "antd";
import NeuInput from "../NeuContainer/NeuInput";
import Tag from "../Tag";

const Edit = () => {
  const location = useLocation();

  const themeColor = useSelector(selectTheme);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(location.state.title);
  const [tags, setTags] = useState(location.state.tags || []);
  const [content, setContent] = useState(location.state.content || "");
  const [originContent, setOriginContent] = useState(location.state || "");
  const [blog, setBlog] = useState<FBlog>(location.state);
  const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: true, // 单双栏模式
  };

  const imgUpload = async (files: File) => {
    const formData = new FormData();
    formData.append("file", files[0], files[0].name);
    const result: unknown = await uploadImg(files);
    message.success(result as string);
  };

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  const onTitleChange = (value: string) => {
    setTitle(value);
  };
  const handleEditorSave = (value: string) => {
    setLoading(true);
    updateBlog({
      ...blog,
      title: title,
      author: "feline",
      tags,
      content,
    })
      .then((res: any) => {
        navigate(`/blog/detail/${blog.id}`);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <NeuContainer type="sunken" visualHeight={2} style={{ padding: "20px" }}>
      <NeuContainer
        type="protuberant"
        visualHeight={2}
        className="title-container"
      >
        <NeuInput value={title} onChange={onTitleChange} className="title" />
      </NeuContainer>
      <Tag tags={tags} setTags={setTags} />
      <NeuContainer
        type="protuberant"
        visualHeight={2}
        id="editor-container"
        style={
          {
            "--themeColor": themeColor,
            "--oppositeColor": calcFontColor(themeColor),
          } as CSSProperties
        }
      >
        <MDEditor
          placeholder="在这里留下你的想法吧~"
          height="600"
          lineNum={1}
          toolbar={toolbar}
          value={content}
          onChange={handleEditorChange}
          onSave={handleEditorSave}
          addImg={imgUpload}
        />
      </NeuContainer>
    </NeuContainer>
  );
};

export default Edit;
