module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      "jsx": true,
    },
  },
};
