module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'], // Don't assume a <Link /> component is invalid
      specialLink: [ "to" ],
    }],
    'jsx-a11y/media-has-caption': 0,
  },
};
