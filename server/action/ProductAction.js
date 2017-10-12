/**
 * Created by Administrator on 2017/3/19.
 */
const express = require('express'),
    async = require('async'),
    productAction = express.Router(),
    log4js = require('../config/log.js'),
    productDao = require('../dao/productDao.js')
const imgConfig = require('../config/imgConfig.js');
const uuidV4 = require('uuid/v4');
productAction.post('/shopcart', (req, res) => {
    let param = req.body
      const rs = {
        msg: 'success',
        code: 200
      };
    if (Object.keys(param).length === 1) {
      rs.entry = [];
      res.send(JSON.stringify(rs))
    }
    productDao.shopcart(param, function (err, data) {
      if (err) {
        rs.msg = err.message;
        rs.code = '500'
      } else {
          rs.entry = data;
          data.forEach(function (item) {
            item.picSrc = `${imgConfig.imgSrc}${item.picSrc}`
          })
      }
      res.send(JSON.stringify(rs))
    })
});

productAction.post('/insert/add', (req, res) => {
    console.log(123123)
  let param = req.body
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.insertAddress(param, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
});

productAction.post('/pagerSearch', (req, res) => {
  let key =  req.body.key;
  let startPager =  req.body.startPager;
  let orderBy =  req.body.orderBy;
  let orderByOrder =  req.body.orderByOrder;
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.pagerSearch(startPager, key, orderBy, orderByOrder, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
});

productAction.post('/list/add', (req, res) => {
  let userid =  req.body.telephone;
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.listAdd(userid, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
});
productAction.post('/list/order', (req, res) => {
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.listOrder(req.body.order_id, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
});
productAction.post('/detail', (req, res) => {
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.detail(req.body.tpid, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      data.forEach(function (item) {
        item.picSrc = `${imgConfig.imgSrc}${item.picSrc}`
        item.tppicSrc = `${imgConfig.imgSrc}${item.tppicSrc}`
        item.logoStr = `${imgConfig.imgSrc}${item.logoStr}`
      })
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
});

productAction.post('/insert/order', (req, res) => {
  let param = req.body
  const rs = {
    msg: 'success',
    code: 200
  }
  let order_id = uuidV4() ;
  let user_id;
  const arr = [];
  for (let key in param) {
      if (param.hasOwnProperty(key) && key !== 'cartColumn') {
        user_id = param[key].user_id;
        let obj = {
                order_id: order_id,
                user_id: param[key].user_id,
                product_id: key,
                shop_id: param[key].shopId,
                address_id: param[key].addressId,
                count: param[key].count
            }
            arr.push(function (done) {
              productDao.insertOrder(obj, function (err, data) {
                console.log(key, param[key].count)
                if (!err) {
                  productDao.updateCount(key, param[key].count, done)
                } else {
                  done(err, done)
                }

              })

            })
      }
  }
  async.waterfall([function (cb) {
    productDao.insertOd({
      id: order_id,
      user_id: user_id
    }, cb)
  }, function (args, cb) {
    async.parallel(arr, function (err, result) {
      if (err) {
        rs.msg = err.message;
        rs.code = '500'
      } else {
        rs.entry = {
          id: order_id,
          user_id: user_id
        };
      }
      cb(err, rs)
    })
  }], function (err, rs) {
    res.send(JSON.stringify(rs))
  })

});

module.exports = productAction;