const dbUtil = require('../util/dbUtil.js');
const imgConfig = require('../config/imgConfig.js');
const log4js = require('../config/log.js')
const pager = require('../util/index')
const async = require ('async');
module.exports.load = function (id, handler) {
  const sql = 'select ts.id as id, ts.name as name, ts.picSrc as picSrc, ts.logoStr as logoStr, ts.intro as intro from t_shop ts where ts.id = ?';
  const config = {
    handler: (err, data) => {
      if (data) {
        data[0].picSrc = `${imgConfig.imgSrc}${data[0].picSrc}`;
        data[0].logoStr = `${imgConfig.imgSrc}${data[0].logoStr}`;
      }
      handler(null, data);
    },
    sql,
        args: [id]
      }
      dbUtil.query(config);
    };
    module.exports.pagerBypsid = function (startPager, psid, cb) {
        const sql = `select  tp.id as id , tp.amount as amount, tp.intro as intro, tp.name as name, tp.leftAmount as leftAmount,
   tp.height as height, tp.width as width, tp.brand as brand, tp.oldPrice as oldPrice, 
   tp.picSrc as picSrc, tp.price as price  from t_product tp , t_productscale_product  pps  where pps.product_scale_id = ${psid} and tp.id = pps.product_id   and  tp.status = 1`
        pager(startPager, 10, sql, function (err, data) {
            if (err) {
               return cb(err, data);
            }
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
    module.exports.pagerByps = function (id, handler) {
      log4js.logInfo.info(`shopbyps by id ${id}`);
      async.waterfall([function(done){
            const sql = `select id,  name, shop_id  from t_productscale tp where tp.shop_id = ?`
            const config = {
                handler: (err, data) => {
                  log4js.logInfo.info('success');
                  if (!err) {
                    done(null, data)
                  } else {
                    done(err, null)
                  }
                },
                sql,
                args: [id]
            }
            dbUtil.query(config);
        },
        function(data, done){
          var funs = [];
          data.forEach(function ( v, key) {
              var fun = (function(v) {
                  return function (callback) {
                      const sql = `select  tp.id as id , tp.amount as amount, tp.intro as intro, tp.name as name, tp.leftAmount as leftAmount,
   tp.height as height, tp.width as width, tp.brand as brand, tp.oldPrice as oldPrice, 
   tp.picSrc as picSrc, tp.price as price  from t_product tp , t_productscale_product  pps  where pps.product_scale_id = ? and tp.id = pps.product_id   and  tp.status = 1 limit 0, 6`
                      const config = {
                          handler: (err, data) => {
                              log4js.logInfo.info('success');
                              if (!err) {
                                  data.forEach(function (v, k) {
                                      v.picSrc = `${imgConfig.imgSrc}${v.picSrc}`;
                                  })
                                  v.products = data;
                                  callback(null, null)
                              } else {
                                  callback(err, null)
                              }
                          },
                          sql,
                          args: [v.id]
                      }
                      dbUtil.query(config);
                  }
              })(v)
             funs.push(fun);
          })
          async.parallel(funs,
          function (error, result) {
              if (!error)
              done(null, data)
              else {
                  done(error, null);
              }
          })
        }]
        ,function(error,result){
          if(!error) {
              handler(null, result)
          }else {
              handler(error,null);
          }
        });
    }

