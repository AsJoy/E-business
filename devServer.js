var express = require('express');
var session = require('express-session');
var cookieParse = require('cookie-parser');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var path = require('path');
var proxy = require('http-proxy-middleware');
var app = express();

app.use(cookieParse())

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/build/',
  ninfo: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));
app.use('/assets', express.static(path.join(__dirname, 'assets/')))
app.use('/resources', express.static(path.join(__dirname, 'resources/')))
app.use('/demo', express.static(path.join(__dirname, 'demo/')))
app.get('/chat', function (req, res) {
  res.sendFile(`${__dirname}/demo/chat.html`);
});

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/demo/index.html`);
});

// Proxy api requests
app.use('/api/*', proxy('/api', { target: 'http://localhost:8989',changeOrigin: true }));
app.use('/product/*', proxy('/product', { target: 'http://localhost:8989',changeOrigin: true }));
app.use('/order/*', proxy('/order', { target: 'http://localhost:8989',changeOrigin: true }));



var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
