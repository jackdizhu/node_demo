var
http = require('http'),
url = require('url'),
_mysql = require('./mysqlModule.js'),
log = require('./logger.js');

var config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
  port: 3306
};
var pool = _mysql.client(config);

// 查询所有数据库下数据表
var selectAllTables = function (pool,res) {
  sql = 'select * from INFORMATION_SCHEMA.TABLES';
  _mysql.query(pool,sql)
  .then(function (data) {
      // log.error(data);
      // var s = '[';
      var s = '';
      var _data = [];
      var _data2 = [];
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      if(typeof data !== 'object'){
        res.end('查询失败!');
      }else{
        //返回值 组成新数组
        data.forEach(function (value, index, array) {
          if(value.TABLE_SCHEMA == config.database){
            _data.push(value);
          }
        });
        // 修改原始数组
        _data2 = _data.map(function (value, index, array) {
          return value.TABLE_NAME;
        });
        data = _data2;
        for(var i = 0; i < data.length; i++){
            s += '<p><a href="./?sql=table&table='+data[i]+'&page=1">' + data[i] + '</a></p>';
            // s += ',';
        }
        // s += ']';
        s += '';
        res.end(s);
      }
      return false;
  })
  .catch(function(err){
      // log.error(err);
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('查询失败!' + 'err');
  });
}
// 查询数据表下数据 10条记录
var selectTables = function (pool,res,table,page) {
  var n = 10;
  LIMIT1 = (page-1)*n;
  sql = 'select * from '+table+' LIMIT '+LIMIT1+','+n;
  // log.error(sql);
  _mysql.query(pool,sql)
  .then(function (data) {
      // log.error(data.length);
      var s = '[';
      var _data = [];
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      if(typeof data !== 'object'){
        res.end('查询失败!');
      }else{
        //返回值 组成新数组
        // data.forEach(function (value, index, array) {
        //   if(value.TABLE_SCHEMA == config.database){
        //     _data.push(value);
        //   }
        // });
        // 修改原始数组
        // _data.map(function (value, index, array) {
        //   return value.TABLE_NAME;
        // });
        // data = _data;
        for(var i = 0; i < data.length; i++){
            s += JSON.stringify(data[i]);
            s += ',';
        }
        s += ']';
        res.end(s);
      }
      return false;
  })
  .catch(function(err){
      // log.error(err);
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('查询失败!' + 'err');
  });
}

// 创建服务器 查询  t = 数据表
http.createServer(function (req,res) {
  var U = url.parse(req.url, true);
  var _pathname = U.pathname;
  var query = U.query;
  var sql = '';
    // log.error(query);
  if(U.pathname == '/'){
    if(query.sql != 'table'){
        selectAllTables(pool,res);
    }else if(query.table != ''){
        selectTables(pool,res,query.table,query.page);
    }else{
      res.end();
    }
  }else{
    res.end();
  }
}).listen(8000, '127.0.0.1');


