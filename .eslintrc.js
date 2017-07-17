module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0
  }
};
