/**
 *
 * @author xiaoping (edwardhjp@gmail.com)
 * @type js
 *
 */

const
  path = require('path'),
  webpack = require('webpack'),
  precss = require('precss'),
  autoprefixer = require('autoprefixer');

module.exports = {
  devtool: false,
  entry: {
    app1: [
      './src/js/app.js'
    ],
    app2: [
      './src/js/app1.js'
    ],
    shop: [
      './src/js/App/shop.js'
    ],
    login: [
      './src/js/App/login.js'
    ],
    detail: [
      './src/js/App/detail.js'
    ],
    register: [
      './src/js/App/register.js'
    ],
    self: [
      './src/js/App/self.js'
    ],
    shopcart: [
      './src/js/App/shopcart.js'
    ],
    order: [
      './src/js/App/order.js'
    ],
    entry: [
      './src/js/App/entry.js'
    ],

    scaleList: [
      './src/js/App/scaleList.js'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] // 当requrie的模块找不到时，添加这些后缀
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    publicPath: './build/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commons.chunk.js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      DEBUG: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /[^_]\.css$/,
      loaders: ['style', 'css', 'postcss'],
      include: __dirname
    }, {
      test: /_\.css|\.pcss$/,
      loaders: ['style', 'css?modules&localIdentName=[local]__[name]_[hash:base64:5]', 'postcss'],
      include: __dirname
    }, {
      test: /\.(png|jpg|jpeg)$/,
      loader: 'url-loader?limit=10240',
      include: __dirname
    }]
  },
  postcss: () => {
    const ret = [precss, autoprefixer];
    return ret;
  }
}
