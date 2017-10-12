var async = require('async');
var db = require('../util/dbUtil.js');
var pager = require('../util/index.js');
const imgConfig = require('../config/imgConfig');
const Product = require('../modal/product');
const Address = require('../modal/address');
const log4js = require('../config/log.js');
const sqlmaker = require('../util/sqlmaker');
module.exports.pager = function (startPager, id, cb) {
  const sql = `select tp.id as id , tp.amount as amount, tp.intro as intro, tp.name as name, tp.leftAmount as leftAmount,
   tp.height as height, tp.width as width, tp.brand as brand, tp.oldPrice as oldPrice, 
   tp.picSrc as picSrc, tp.price as price from t_product tp where tp.shop_id = ${id}  and  tp.status = 1`
  pager(startPager, 10, sql, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
    const products = data.data.map((item, index) => {
      const obj = Object.assign({}, item, {
        picSrc: `${imgConfig.imgSrc}${item.picSrc}`
      })
      return obj;
    });
    data.data = products;
    cb(null, data);
  });
};

module.exports.pagerSearch = function (startPager, str, orderBy, orderByOrder, cb) {
  let sql = `select tp.id as id , tp.amount as amount, tp.intro as intro, tp.name as name, tp.leftAmount as leftAmount,
   tp.height as pagerSearchheight, tp.width as width, tp.brand as brand, tp.oldPrice as oldPrice, 
   tp.picSrc as picSrc, tp.price as price from t_product tp where tp.name like '%${str}%' or  tp.intro like '%${str}%' and  tp.status = 1`
  if (orderBy) {
    sql += ' order by ' + orderBy + (orderByOrder? ' DESC': ' ASC')
  }
  pager(startPager, 10, sql, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const products = data.data.map((item, index) => {
        const obj = Object.assign({}, item, {
          picSrc: `${imgConfig.imgSrc}${item.picSrc}`
        })
        return obj;
      });
      data.data = products;
    }

    cb(err, data);
  });
};

module.exports.updateCount = function ( id, count, done) {
  const config =  {
    sql: `update t_product t set t.leftAmount = t.amount-? where t.id = ?`,
    args: [count, id],
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

module.exports.shopcart = function (data, done) {
  delete data.cartColumn;
  console.log(data)
  let pids = Object.keys(data);
  const query = sqlmaker.query(new Product(), 't_product')
  query.in({'id': pids});
  console.log(query.sql)
  const config = Object.assign({},query, {
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

module.exports.detail = function (tpid, done) {
  const config = {
    sql: `select *, tp.id as tpid, tp.intro as tpintro, tp.picSrc as tppicSrc, tp.name as tpname
     from t_product tp left JOIN t_shop ts on (ts.id = tp.shop_id) where tp.id = ?`,
    args: [tpid],
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


module.exports.insertAddress = function (data, done) {
  console.log(sqlmaker.insert(data, 't_address').sql)
  const config = Object.assign({},sqlmaker.insert(data, 't_address'), {
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

module.exports.loadAdd = function (addressId, done) {
  console.log(sqlmaker.query(new Address(), {id: addressId},'t_address').sql)
  const config = Object.assign({},sqlmaker.query(new Address(), {id: addressId},'t_address'), {
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

module.exports.listAdd = function (userid, done) {
  console.log(sqlmaker.query(new Address(), {user_id: userid},'t_address').sql)
  const config = Object.assign({},sqlmaker.query(new Address(), {user_id: userid},'t_address'), {
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

module.exports.insertOrder = function (data, done) {
  console.log(sqlmaker.insert(data, 't_order_product').sql)
  const config = Object.assign({},sqlmaker.insert(data, 't_order_product'), {
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
module.exports.listOrder = function (user_id, done) {
  const config =  {
    sql: `SELECT *, t1.id as id, top.id as top_id, tp.id as tp_id from 
t_order t1 
LEFT JOIN t_order_product top 
ON (top.order_id = t1.id) 
LEFT JOIN t_product tp ON (top.product_id = tp.id)
where t1.user_id = ?`,
    args: [user_id],
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
module.exports.loadOrder = function (order_id, done) {
  const config =  {
    sql: `SELECT *, t1.id as id, top.id as top_id, tp.id as tp_id from 
t_order t1 
LEFT JOIN t_order_product top 
ON (top.order_id = t1.id) 
LEFT JOIN t_product tp ON (top.product_id = tp.id)
where t1.id = ?`,
    args: [order_id],
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

