const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  cookieParse = require('cookie-parser'),
  partials = require('express-partials'),
  session = require('express-session'),
  log4js = require('log4js'),
  app = express(),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  log = require('./server/config/log.js'),
  userAction = require('./server/action/UserAction.js');
  productAction = require('./server/action/ProductAction.js');
  orderAction = require('./server/action/orderAction');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ type: 'application/*+xml', extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParse())
app.use(session({
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 30 * 1000 }
}));

app.set('views', path.join(__dirname, 'viewer'));
app.set('view engine', 'ejs');
app.use(partials());
// app.use(log4js.connectLogger(log.logInfo));
app.use(favicon(`${__dirname}/assets/ico/logo.ico`));
app.use('/resources', express.static(path.join(__dirname, 'resources/')));
app.use('/assets', express.static(path.join(__dirname, 'assets/')));
app.use('/demo', express.static(path.join(__dirname, 'demo/')));
app.use('/build', express.static(path.join(__dirname, 'build/')));
// app.use(cookieParse());

var http = require('http').Server(app);

var io = require('socket.io')(http);
io.on('connection', function (socket) {
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

// app.use(flash());
app.use('/api', userAction);
app.use('/product', productAction);
app.use('/order', orderAction);
const server = http.listen(8989, (err) => {
  if (err) {
    return;
  }
  console.log(`listening http://localhost:${server.address().port}`);
});
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

module.exports = app;
