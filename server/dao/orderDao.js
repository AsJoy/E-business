var async = require('async');
var db = require('../util/dbUtil.js');
var pager = require('../util/index.js');
const imgConfig = require('../config/imgConfig');
const Product = require('../modal/product');
const Address = require('../modal/address');
const log4js = require('../config/log.js');
const sqlmaker = require('../util/sqlmaker');

module.exports.Orderinfo = function (userid, orderid, done) {

  const config = {
    sql: `SELECT *, top.status as order_status, tp.name as pname, ts.user_id as saler_id, tp.picSrc as ppicSrc, tp.intro as pintro from t_order tor 
LEFT JOIN  t_order_product top on (tor.id = top.order_id) LEFT JOIN t_product tp on (tp.id = top.product_id)
 left JOIN t_shop ts on (ts.id = tp.shop_id)  WHERE tor.user_id = ? and tor.id = ? `,
    args: [userid, orderid],
    handler: (err, data) => {
      log4js.logInfo.info('success');
      if (!err) {
        done(null, data)
      } else {
        done(err, null)
      }
    }
  }
  db.query(config);
}
module.exports.OrderList = function (userid, done) {

  const config = {
    sql: `SELECT *, top.status as order_status, tor.id as combine_id, top.id as order_product_id from t_order tor 
LEFT JOIN  t_order_product top on (tor.id = top.order_id) LEFT JOIN t_product tp on (tp.id = top.product_id) 
 WHERE tor.user_id = ? `,
    args: [userid],
    handler: (err, data) => {
      log4js.logInfo.info('success');
      if (!err) {
        done(null, data)
      } else {
        done(err, null)
      }
    }
  }
  db.query(config);
}

module.exports.insertOd = function (data, done) {
  console.log(sqlmaker.insert(data, 't_order'))
  const config = Object.assign({},sqlmaker.insert(data, 't_order'), {
    handler: (err, data) => {
      log4js.logInfo.info('success');
      if (!err) {
        done(null, data)
      } else {
        done(err, null)
      }
    }
  })
  db.query(config);
}


