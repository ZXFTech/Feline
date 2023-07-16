const fs = require("fs");
const { glob } = require("glob");

const MARKDOWN_GLOB = process.cwd() + "/public/markdown/*.md";
const BLOG_LIST_JSON_PATH = process.cwd() + "/public/blog-list.json";

const generateBlogList = async () => {
  const markdownList = await glob(MARKDOWN_GLOB);

  const names = markdownList.map(
    (file) => file.split("\\").reverse()[0].split(".")[0]
  );

  fs.writeFileSync(BLOG_LIST_JSON_PATH, JSON.stringify(names));
};

generateBlogList();
