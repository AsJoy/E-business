/**
 * Created by Administrator on 2017/3/19.
 */
const express = require('express'),
    async = require('async'),
    orderAction = express.Router(),
    log4js = require('../config/log.js'),
    productDao = require('../dao/productDao.js')
    orderDao = require('../dao/orderDao.js')
const imgConfig = require('../config/imgConfig.js');
const uuidV4 = require('uuid/v4');

orderAction.post('/orderInfo', (req, res) => {
  let param = req.body;
  const rs = {
    msg: 'success',
    code: 200
  };
  async.waterfall([function (cb) {
    orderDao.Orderinfo(param.user_id, param.id, function (err, data) {
      if (!err) {
        rs.entry = {}
        rs.entry.data = data;
        data.forEach(function (item) {
          item.ppicSrc = `${imgConfig.imgSrc}${item.ppicSrc}`
        })
      }
      cb(err, data)
    })
  }, function (data, cb) {
    let addressId = data[0].address_id;
    productDao.loadAdd(addressId, function (err, data) {
      if (!err)
      rs.address = data[0]
      cb(err, data)
    })
  }], function (err, result) {
    console.log(err)
    if (err) {
      rs.code = '500'
      rs.message = err.message
    } else {

    }
    res.send(JSON.stringify(rs))
  })
})

orderAction.post('/orders', (req, res) => {
  let param = req.body;
  const rs = {
    msg: 'success',
    code: 200
  };
  orderDao.OrderList(param.user_id, function (err, data) {
    if (err) {
      rs.code = '500'
      rs.message = err.message
    } else {
      rs.entry = data;
      data.forEach(function (item) {
        item.picSrc = `${imgConfig.imgSrc}${item.picSrc}`
      })
      res.send(JSON.stringify(rs))
    }
  })
})

// 首页
orderAction.post('/index', (req, res) => {
  let key =  req.body.key;
  const rs = {
    msg: 'success',
    code: 200
  }
  productDao.pagerSearch(1, key, '', false, function (err, data) {
    if (err) {
      rs.msg = err.message;
      rs.code = '500'
    } else {
      rs.entry = data;
    }
    res.send(JSON.stringify(rs))
  })
})


module.exports = orderAction;