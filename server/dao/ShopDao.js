const dbUtil = require('../util/dbUtil.js');
const imgConfig = require('../config/imgConfig.js');
module.exports.load = function (id, handler) {
  const sql = 'select ts.id as id, ts.name as name, ts.picSrc as picSrc, ts.intro as intro, ts.background as background from t_shop ts where ts.id = ?';
  const config = {
    handler: (err, data) => {
      if (data) {
        data[0].picSrc = `${imgConfig.imgSrc}${data[0].picSrc}`;
      }
      handler(null, data);
    },
    sql,
    args: [id]
  }
  dbUtil.query(config);
};
