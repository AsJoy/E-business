
const G_CONFIG = require('../config.js');
const mysql = require('mysql');
const log = require('../config/log.js');
var pool = mysql.createPool({
  host: G_CONFIG.dbHost,
  user: G_CONFIG.dbUser,
  password: G_CONFIG.dbPassword,
  database: G_CONFIG.database,
  connectionLimit: G_CONFIG.connectionLimit
});

module.exports = {
  transaction(callback) {
    pool.getConnection(function (error, connection) {
      if (error) {
        log.logInfo.error('DB-获取数据库连接异常！\nmessage:' + error.message + '\nstack:' + error.stack);
        throw error;
      }
      callback && callback(connection);
    });
  },
  query(options) {
    pool.getConnection(function (error, connection) {
      if (error) {
        log.logInfo.error('DB-获取数据库连接异常！\nsql:' + options.sql + '\nmessage:' + error.message + '\nstack:' + error.stack);
        throw error;
      }

      // 查询参数
      var sql = options['sql'];
      var args = options['args'];
      var handler = options['handler'];

      var callback = function (error, results) {
        // 释放链接池
        connection.release();
        if (error) {
          log.logInfo.error('DB-执行查询语句异常！\nsql:' + options.sql + '\nmessage:' + error.message + '\nstack:' + error.stack);
        } else {
          log.logInfo.info('DB-执行查询语句成功！\nsql:' + options.sql);
          console.log('sql:' + options.sql + '\n');
        }
        // 处理结果
        handler(error, results);
      };
      // 执行查询
      if (!args) {
        connection.query(sql, callback);
      } else {
        connection.query(sql, args, callback);
      }
    });
  }
};
