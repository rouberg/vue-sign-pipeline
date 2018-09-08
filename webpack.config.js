const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env, args) {
  const isProduction = args['p']
  const sourceMap = !isProduction
  const module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        oneOf: [
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]-[local]_[hash:base64:6]'
                }
              },
              'postcss-loader'
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader'
            ]
          }
        ]
      },
      {
        test: /\.scss$/,
        oneOf: [
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap
                }
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap,
                  localIdentName: '[name]-[local]_[hash:base64:6]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap
                }
              }
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap
                }
              }
            ]
          }
        ]
      }
    ]
  }

  const shared = {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module,
    node: {
      setImmediate: false,
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
  }
  const developmentConfig = {
    mode: 'development',
    entry: {
      test: './test'
    },
    ...shared,
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: false,
      port: 9100,
      clientLogLevel: 'warning'
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  }

  const productionShared = {
    mode: 'production',
    ...shared,
    entry: './src',
    optimization: {
      minimize: true
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    externals: {
      vue: {
        commonjs: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    }
  }

  const productionConfig = [
    {
      ...productionShared,
      output: {
        filename: './sign-pipeline.amd.js',
        libraryTarget: 'amd'
      },
      target: 'node'
    }, {
      ...productionShared,
      output: {
        filename: './sign-pipeline.commonjs.js',
        libraryTarget: 'commonjs'
      },
      target: 'node'
    }, {
      ...productionShared,
      output: {
        filename: './sign-pipeline.js',
        libraryTarget: 'amd'
      },
      target: 'web'
    }]
  return isProduction ? productionConfig : developmentConfig
}
