// based on https://github.com/storybookjs/linter-config
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:mdx/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    node: {
      allowModules: ['@storybook/addon-docs', '@storybook/addon-knobs'],
    },
  },
  rules: {
    'padding-line-between-statements': 'off',
    'react/jsx-uses-vars': 'error',
  },
};
