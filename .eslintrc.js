module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [ "react" ],
  "rules": {
    "linebreak-style": ["error","unix"],
    "no-console": ["warn", { "allow": ["info", "error"] }],
    "indent": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-indent-props": 1,
    "react/jsx-indent": 1
  }
};
