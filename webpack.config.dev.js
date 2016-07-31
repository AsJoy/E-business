const
  path = require('path'),
  webpack = require('webpack'),
  precss = require('precss'),
  autoprefixer = require('autoprefixer');

var config = {
  // 设置合并后可查看原文件
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app1: [
      'webpack-hot-middleware/client',
      './src/js/app.js'
    ],
    app2: [
      'webpack-hot-middleware/client',
      './src/js/app1.js'
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
        test: /_\.css$/,
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