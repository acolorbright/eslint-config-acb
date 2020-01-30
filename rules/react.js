module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/destructuring-assignment': 1,
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      'warn', {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-fragments': ['error', 'element'],
    // See https://github.com/vkbansal/eslint-plugin-jsx-control-statements#important
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 'error',
  },
};
