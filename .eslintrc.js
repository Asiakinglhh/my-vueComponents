module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'spaced-comment': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error'
  }
};
