# eslint-config-acb

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint` plus the following packages:
  - `eslint-plugin-extra-rules`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-jsx-control-statements`
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`

If you don't need React, see [eslint-config-acb-base](https://github.com/acolorbright/eslint-config-acb-base).

```shell
$ npm install --save-dev 'acolorbright/eslint-config-acb#v3.1.0' eslint@6.3.0 eslint-plugin-extra-rules@0.8.1 eslint-plugin-import@2.18.2 eslint-plugin-jsx-a11y@6.2.3 eslint-plugin-jsx-control-statements@2.2.1 eslint-plugin-react@7.14.3 eslint-plugin-react-hooks@2.0.1
```

Then add `"extends": "acb"` to your `.eslintrc` file.
