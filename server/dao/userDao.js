/**
 * Created by Administrator on 2017/3/19.
 */
var async = require('async');
var db = require('../util/dbUtil.js');
const log4js = require('../config/log.js');
const sqlmaker = require('../util/sqlmaker');
const User = require('../modal/user');
module.exports.insert = function (user, done) {
    const config = Object.assign({},sqlmaker.insert(user, 't_user'), {
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
};

module.exports.login = function (telephone, password, done) {
    const query = sqlmaker.query(new User(),{telephone, password }, 't_user');
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
};
