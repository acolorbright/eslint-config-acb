# eslint-config-acb

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint` plus the following packages:
  - `eslint-plugin-compat`
  - `eslint-plugin-extra-rules`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-jsx-control-statements`
  - `eslint-plugin-react`

If you don't need React, see [eslint-config-acb-base](https://github.com/acolorbright/eslint-config-acb-base).

```shell
$ npm install --save-dev 'acolorbright/eslint-config-acb#v2.0.2' eslint@5.1.0 eslint-plugin-compat@2.5.0 eslint-plugin-extra-rules@0.8.1 eslint-plugin-import@2.13.0 eslint-plugin-jsx-a11y@6.1.0 eslint-plugin-jsx-control-statements@2.2.1 eslint-plugin-react@7.10.0
```

Then add `"extends": "acb"` to your `.eslintrc` file.
