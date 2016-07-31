
const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  cookieParse = require('cookie-parser'),
  partials = require('express-partials'),
  log4js = require('log4js'),
  app = express(),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  log = require('./server/config/log.js'),
  userAction = require('./server/action/UserAction.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ type: 'application/*+xml', extended: false }));
// parse application/json
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'viewer'));
app.set('view engine', 'ejs');
app.use(partials());
// app.use(log4js.connectLogger(log.logInfo));
app.use(favicon(`${__dirname}/assets/ico/logo.ico`));
app.use('/resources', express.static(path.join(__dirname, '/resources')));
// app.use(cookieParse());

var http = require('http').Server(app);

var io = require('socket.io')(http);
io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

// app.use(flash());
app.use('/api', userAction);
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
