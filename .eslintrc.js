module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    amd: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ]
}
