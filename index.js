module.exports = {
  extends: [
    './rules/akinon-config',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
