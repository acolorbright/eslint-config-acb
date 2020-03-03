# eslint-config-acb

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint`, `babel-eslint`, and the following other packages:
  - `eslint-plugin-extra-rules`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-jsx-control-statements`
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`

If you don't need React, see [eslint-config-acb-base](https://github.com/acolorbright/eslint-config-acb-base).

```shell
$ npm install --save-dev 'acolorbright/eslint-config-acb#v4.0.2' babel-eslint@10.x eslint@6.x eslint-plugin-extra-rules@^0.8 eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-jsx-control-statements@2.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x
```

Then add `"extends": "acb"` to your `.eslintrc` file.
