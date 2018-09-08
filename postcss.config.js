// postCSS 配置文件
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 14,
      unitPrecision: 5,
      propList: ['*', '!letter-spacing', '!border-radius', '!box-shadow'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 5
    }
  }
}
