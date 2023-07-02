const { execSync } = require("child_process");

const fs = require("fs");
const yaml = require("js-yaml");

console.log("exec", execSync("git diff --name-only --cached").toString());

try {
  const fileContent = fs;
} catch (error) {}
