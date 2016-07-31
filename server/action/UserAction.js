const express = require('express'),
  async = require('async'),
  userAction = express.Router(),
  log4js = require('../config/log.js'),
  userDao = require('../dao/productDao.js'),
  shopDao = require('../dao/ShopDao.js');

userAction.get('/pager/:id', (req, res) => {
  const param = req.params;
  const startPager = req.query.startPager;
  const callback = req.query.callback;
  async.parallel([
    function (cb) {
      log4js.logInfo.info(`pager success id ${param.id}`);
      userDao.pager(startPager, param.id, cb);
    },
    function (cb) {
      shopDao.load(param.id, function (err, data) {
        cb(null, data);
      });
    }
  ], function (err, data) {
    console.log(data);
    data = {
      pager: data[0],
      shop: data[1]
    };
    console.log(data);
    res.send(`${callback}(${JSON.stringify(data)})`);
  })
});

module.exports = userAction;
