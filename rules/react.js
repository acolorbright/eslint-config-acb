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
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      'warn', {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-sort-props': 'error',
  },
};
