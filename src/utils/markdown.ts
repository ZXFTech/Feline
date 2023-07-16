import axios from "axios";
import { glob } from "glob";

const getMarkdown = async (path: string) => {
  return axios.get(path);
};

const getMarkdownList = async () => {
  return axios.get("/blog-list.json");
};

export { getMarkdown, getMarkdownList };
