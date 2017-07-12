module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      "jsx": true,
    },
  },
};
