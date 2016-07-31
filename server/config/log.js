var path = require('path');
var log4js = require('log4js');
var logConfig = {
  'appenders': [{
    'type': 'console',
    'category': 'console'
  }, {
    'type': 'dateFile',
        // 目录
    'filename': path.join(process.cwd(), '/logs/'),
        // 命名规则
    'pattern': 'yyyyMMdd.log',
    'absolute': true,
    'alwaysIncludePattern': true,
    'category': 'logInfo'
  }],
  'levels': {
    'logInfo': 'DEBUG'
  },
  'replaceConsole': true
};

log4js.configure(logConfig);

module.exports = {
  logInfo: log4js.getLogger('logInfo')
};
