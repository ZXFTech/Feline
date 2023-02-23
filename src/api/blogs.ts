import { get } from "@/request";
import { blogDetail, blogList } from "./url";

// 获取博客列表
export const getBlogList = (pageNum: number, pageSize: number) => {
  return get(blogList, { pageNum, pageSize });
};

// 获取博客内容
export const getBLogDetail = (blogId: number) => {
  return get(blogDetail, { blogId });
};
