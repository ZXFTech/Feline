module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "./rules/eslint/best-practices/airbnb.js",
    "./rules/eslint/errors/airbnb.js",
    "./rules/eslint/es6/airbnb.js",
    "./rules/eslint/node/airbnb.js",
    "./rules/eslint/strict/airbnb.js",
    "./rules/eslint/style/airbnb.js",
    "./rules/eslint/variables/airbnb.js",
    "./rules/filenames/airbnb.js",
    "./rules/eslint/node/airbnb.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", "space"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    curly: ["error", "multi", "consistent"],
  },
};
