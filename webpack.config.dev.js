const
  path = require('path'),
  webpack = require('webpack'),
  precss = require('precss'),
  autoprefixer = require('autoprefixer');

var config = {
  // 设置合并后可查看原文件
  // 'cheap-module-eval-source-map'
  devtool: 'source-map',
  entry: {
    // app1: [
    //   'webpack-hot-middleware/client',
    //   './src/js/app.js'
    // ],
    // app2: [
    //   'webpack-hot-middleware/client',
    //   './src/js/app1.js'
    // ],
    shop: [
      'webpack-hot-middleware/client',
      './src/js/App/shop.js'
    ],
      login: [
          'webpack-hot-middleware/client',
          './src/js/App/login.js'
      ],
      register: [
          'webpack-hot-middleware/client',
          './src/js/App/register.js'
      ],
      self: [
        'webpack-hot-middleware/client',
        './src/js/App/self.js'
      ],
    shopcart: [
      'webpack-hot-middleware/client',
      './src/js/App/shopcart.js'
    ],
    order: [
      'webpack-hot-middleware/client',
      './src/js/App/order.js'
    ],
    entry: [
      'webpack-hot-middleware/client',
      './src/js/App/entry.js'
    ],
    detail: [
      'webpack-hot-middleware/client',
      './src/js/App/detail.js'
    ],

      scaleList: [
        'webpack-hot-middleware/client',
        './src/js/App/scaleList.js'
    ]

  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] // 当requrie的模块找不到时，添加这些后缀
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commons.chunk.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      DEBUG: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /[^_]\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: __dirname
      },
      {
        test: /_\.css|\.pcss$/,
        loaders: ['style', 'css?modules&localIdentName=[local]__[name]_[hash:base64:5]', 'postcss'],
        include: __dirname
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=10240',
        include: __dirname
      }
    ]
  },
  postcss: () => {
    const ret = [precss, autoprefixer];
    return ret;
  }
};
module.exports = config;