var async = require('async');
var db = require('./dbUtil.js');

/**
 * 数据库分页请求方法
 * @param env {String} 当前环境，daily/gray/online
 * @param page {Number} 当前第几页，从1开始
 * @param pageSize {Number} 页数
 * @param sql {String} 查询的数据库sql语句
 * @param url {String} 分页链接
 * @param callback {Function} 回调函数
 */
function pagination(page, pageSize, sql, callback) {
  async.waterfall([
        // 取这一页的数据
    function (cb) {
      var start = (page - 1) * pageSize;
      var config = {
        handler(error, results) {
          if (error) {
            cb(error);
          } else {
            cb(null, results);
          }
        },
        sql: sql + ' ORDER BY id DESC LIMIT ' + start + ',' + pageSize
      };
      db.query(config);
    },
        // 取总页数
    function (dataList, cb) {
      var config = {
        handler(error, results) {
          if (error) {
            cb(error);
          } else {
            var totalPages = Math.ceil(results[0]['count(*)'] / pageSize) || 1;
            cb(null, {
              data: dataList,
              currentPage: page,
              totalPages
            });
          }
        },
        sql: sql.replace(/select .+ from/i, 'select count(*) from')
      };
      db.query(config);
    }
  ], function (error, result) {
    callback(error, result);
  });
}

module.exports = pagination;
