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
// 查询数据表下数据 10条记录 json 显示
var selectTablesJson = function (pool,res,table,page) {
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
// 查询数据表下数据 10条记录 表格显示
var selectTablesTable = function (pool,res,table,page) {
  var n = 10;
  LIMIT1 = (page-1)*n;
  var lPage = page - 1;
  var rPage = page + 1;
  sql = 'select * from '+table+' LIMIT '+LIMIT1+','+n;
  // log.error(sql);
  _mysql.query(pool,sql)
  .then(function (data) {
      // log.error(data.length);
      var s = '<table style="word-break:break-all;border-collapse: collapse;border: 1px solid #eee;"><tbody>';
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
        s += '<tr style="padding:10px;border: 1px solid #eee;background: #eee;">';
        var r = /([a-z_]{1,})(?=:)/g;
        var jstring = JSON.stringify(data[0]);
        jstring = jstring.replace(/\"/g,'');
        // var key = r.exec(jstring);
        var key = jstring.match(r);
        log.error(jstring);
        for (var i = 0;i < key.length; i++) {
          s += '<td width="100px;" style="padding:10px;border: 1px solid #eee;word-break:normal;">'+key[i]+'</td>';
        }
        s += '<td width="100px;" style="padding:10px;border: 1px solid #eee;word-break:normal;"><a href="./?sql=table&table='+table+'&page='+lPage+'">上一页</a> / <a href="./?sql=table&table='+table+'&page='+rPage+'">下一页</a> 操作</td>';
        s += '</tr>';
        for(var j = 0; j < data.length; j++){
            s += '<tr>';
                for (var k = 0;k < key.length; k++) {
                  s += '<td style="padding:10px;border: 1px solid #eee;">'+data[j][key[k]]+'</td>';
                  // s += '<td style="padding:10px;border: 1px solid #eee;"><a href="./?sql=table&table='+table+'&page='+lPage+'">删除</a></td>';
                }
            // s += '<td>'+JSON.stringify(data[j])+'</td>';
            s += '</tr>';
        }
        s += '</tbody></table>';
        res.end(s);
      }
      return false;
  })
  .catch(function(err){
      log.error(err);
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
        selectTablesTable(pool,res,query.table,Number(query.page));
    }else{
      res.end();
    }
  }else{
    res.end();
  }
}).listen(8000, '127.0.0.1');


