module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    parserOptions: {
      parser: "@babel/eslint-parser"
    },
    rules: {}
}