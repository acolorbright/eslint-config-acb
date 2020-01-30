module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2020: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint-config-airbnb',
    'eslint-config-acb-base',
    './rules/control-statements',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/style',
  ].map(require.resolve),
};
