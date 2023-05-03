import { get, post } from "@/request";
import { FBlog } from "@/types/blogs";
import { urlBlogDetail, urlBlogList, urlAddBlog, urlUpdateBlog } from "./url";

// 获取博客列表
export const getBlogList = (pageNum: number, pageSize: number) => {
  return get(urlBlogList, { pageNum, pageSize });
};

// 获取博客内容
export const getBLogDetail = (blogId: number | string) => {
  return get(urlBlogDetail, { id: blogId });
};

// 添加博客
export const addBlog = (blog: FBlog) => {
  return post(urlAddBlog, blog);
};

// 更新博客
export const updateBlog = (blog: FBlog) => {
  return post(urlUpdateBlog, blog);
};
