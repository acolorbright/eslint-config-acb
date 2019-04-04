module.exports = {
  plugins: [
    'jsx-control-statements',
  ],

  env: {
    'jsx-control-statements/jsx-control-statements': true,
  },

  extends: [
    'plugin:jsx-control-statements/recommended',
  ],

  rules: {
    // jsx-jcs-no-undef replaces no-undef and requires it to be turned off.
    // See: https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-jcs-no-undef.md
    'no-undef': 0,
  },
};
