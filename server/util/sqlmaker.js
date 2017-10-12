/**
 * Created by Administrator on 2017/3/19.
 */
module.exports.insert = function(obj, tablename) {
    let rs = 'insert into ' + tablename;
    let pros = [];
    let vals = [];
    let valreplacers = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            pros.push(key)
            vals.push(obj[key])
            valreplacers.push('?')
        }
    }
    return {
        'sql': rs + ` (${pros.join(',')}) values (${valreplacers.join(',')})`,
        'args': vals
    }
}

// 查询语句
function queryMidddware(sql, args) {
    this.sql = sql
    this.args = args;
}
queryMidddware.prototype.or = function (queryObj) {
    let args = [];
    if (queryObj !== undefined) {
        let queryArr = [];
        for (let key in queryObj) {
            if (queryObj.hasOwnProperty(key)) {
                queryArr.push(`${key} = ?`)
                args.push(queryObj[key])
            }
        }
        this.sql += this.sql.indexOf(' where ')>-1? ` ${queryArr.join(' or ')}`: ` where  ${queryArr.join(' or ')}`;
        this.args = this.args.concat(args);
    }
    return this;
}

queryMidddware.prototype.like = function (queryObj) {
    let args = [];
    if (queryObj !== undefined) {
        let queryArr = [];
        for (let key in queryObj) {
            if (queryObj.hasOwnProperty(key)) {
                queryArr.push(`${key} like  ?`)
                args.push(queryObj[key])
            }
        }
        this.sql += this.sql.indexOf(' where ')>-1? ` ${queryArr.join(' or ')}`: ` where  ${queryArr.join(' or ')}`;
        this.args = this.args.concat(args);
    }
    return this;
}
queryMidddware.prototype.in = function (queryObj) {
  if (queryObj !== undefined) {
    let queryArr = [];
    for (let key in queryObj) {
      if (queryObj.hasOwnProperty(key)) {
        queryObj[key] = queryObj[key].map(function (item) {
          return `"${item}"`
        })
        queryArr.push(`${key} in  (${queryObj[key].join(',')})`)
      }
    }
    this.sql += this.sql.indexOf(' where ')>-1? ` ${queryArr.join(' and ')}`: ` where  ${queryArr.join(' and ')}`;
  }
  return this;
}

function query(shape, queryObj, tablename) {
    if (arguments.length === 2) {
        tablename = queryObj;
        queryObj = undefined;
    }

    let rs = 'select  ';
    let selectShape = [];
    for (let key in shape) {
        if (shape.hasOwnProperty(key)) {
            selectShape.push(` ${key} as ${key} `)
        }
    }
    rs += `${selectShape.join(',')} from ${tablename} `
    let args = [];
    if (queryObj !== undefined) {
        let queryArr = [];
        for (let key in queryObj) {
            if (queryObj.hasOwnProperty(key)) {
                queryArr.push(`${key} = ?`)
                args.push(queryObj[key])
}
        }
        rs += ` where ${queryArr.join(' and ')}`
    }
    return new queryMidddware(rs, args)
}

module.exports.query = query;