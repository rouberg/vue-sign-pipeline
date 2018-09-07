module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  env: {
    commonjs: true,
    es6: true,
    amd: true
  },
  plugins: [
    'vue'
  ],
  rules: {
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "prefer-promise-reject-errors": 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
