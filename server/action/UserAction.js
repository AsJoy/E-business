const express = require('express'),
  async = require('async'),
  userAction = express.Router(),
  log4js = require('../config/log.js'),
  User = require('../modal/user'),
  productDao = require('../dao/productDao.js'),
  shopDao = require('../dao/ShopDao.js');
const userDao = require('../dao/userDao');

// 添加用户
userAction.post('/user/add', (req, resp) => {
    const rs = {
        msg: 'success',
        code: 200
    }
    let user = new User();
    user.setUser(req.body);
    user.create_date = new Date();
    user.type = 2;
    if (!user.userName) {
        user.userName='匿名用户'
    }
    userDao.insert(user, function (err, data) {
        if (err) {
            rs.msg = err.message;
            rs.code = '500'
        } else {
            rs.entry = data;
        }
        resp.send(JSON.stringify(rs));
    })
})
// 登录
userAction.post('/user/login', (req, resp) => {
    const rs = {
        msg: 'success',
        code: 200
    }
    let telephone = req.body.telephone
    let password = req.body.password
    userDao.login(telephone,password, function (err, data) {
        if (err) {
            rs.msg = err.message;
            rs.code = '500'
        } else {
            if (data.length === 0) {
                rs.msg = '用户名或密码出错';
                rs.code = '500'
            } else {
                data[0].picSrc = data[0].picSrc? (`/${data[0].picSrc}`): '';
                rs.entry = data;
                req.session.user=data[0];
                console.log(req.session.user)
            }
        }
        resp.send(JSON.stringify(rs));
    })
})

// 退出账号
userAction.post('/user/logout', (req, resp) => {
  const rs = {
    msg: 'success',
    code: 200
  }
  delete req.session.user
  resp.send(JSON.stringify(rs));
})


// 商品分页
userAction.get('/pager/:id', (req, res) => {
  const param = req.params;
  const startPager = req.query.startPager;
  const callback = req.query.callback;
  console.log(req.query)
  async.parallel([
    function (cb) {
      log4js.logInfo.info(`pager success id ${param.id}`);
      productDao.pager(startPager, param.id, cb);
    },
    function (cb) {
      shopDao.load(param.id, function (err, data) {
        cb(null, data);
      });
    }
  ], function (err, data) {
    data = {
      pager: data[0],
      shop: data[1]
    };
    
    res.send(`${callback}(${JSON.stringify(data)})`);
  })
});

//店铺首页
userAction.get('/shop/:id', (req, res) => {
  const param = req.params;
  const callback = req.query.callback;
  console.log(req.query);
  async.parallel([
    function (cb) {
      log4js.logInfo.info(`pager success id ${param.id}`);
      shopDao.pagerByps(param.id, cb);
    },
    function (cb) {
      shopDao.load(param.id, function (err, data) {
        cb(null, data);
      });
    }
  ], function (err, data) {
    data = {
      pager: data[0],
      shop: data[1]
    };
    
    res.send(`${callback}(${JSON.stringify(data)})`);
  })
});

// 店铺类目详情
userAction.get('/scale/:id/detail/:psid', (req, res) => {
    const param = req.params;
    const callback = req.query.callback;
    const startPager = req.query.startPager;
    async.parallel([
        function (cb) {
            log4js.logInfo.info(`scale detail success id ${param.id}`);
            shopDao.pagerBypsid(startPager, param.psid, cb);
        }
    ], function (err, data) {
        data = {
            pager: data[0]
        };
        res.send(`${callback}(${JSON.stringify(data)})`);
    })
});

module.exports = userAction;
