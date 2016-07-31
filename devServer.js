var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var path = require('path');
var httpProxy = require("http-proxy");
var app = express();
var apiProxy = httpProxy.createProxyServer()


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
app.get('/chat', function (req, res) {
  res.sendFile(`${__dirname}/demo/chat.html`);
});

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/demo/index.html`);
});

// Proxy api requests
app.use('/api/*', function (req, res) {
  req.url = req.baseUrl; // Janky hack...
  apiProxy.web(req, res, {
    target: {
      port: 8989,
      host: 'localhost'
    }
  });
});



var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
