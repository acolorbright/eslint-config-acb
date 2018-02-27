module.exports = {
  parserOptions: {
    plugins: [
      'jsx-a11y',
      'react',
    ],

    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jsx-a11y/anchor-is-valid': ['error', {
      components: [], // Don't assume a <Link /> component is invalid
    }],
    'jsx-a11y/media-has-caption': 0,
  },
};
