var async = require('async');
var db = require('../util/dbUtil.js');
var pager = require('../util/index.js');
const imgConfig = require('../config/imgConfig');
module.exports.pager = function (startPager, id, cb) {
  const sql = `select tp.id as id , tp.amount as amount, tp.intro as intro, tp.name as name, tp.leftAmount as leftAmount, tp.height as height, tp.width as width, tp.brand as brand, tp.oldPrice as oldPrice, tp.picSrc as picSrc, tp.price as price from t_product tp where tp.shop_id = ${id}  and  tp.status = 1`
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
