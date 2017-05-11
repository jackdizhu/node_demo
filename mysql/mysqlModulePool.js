(function () {
  'use strict';

  var Q = require('q'),
  log = require('./logger.js'),
  mysql = require('mysql');

  var _mysql = {};

  _mysql.client = function (config) {
    var pool = mysql.createPool(config);
    return pool;
  }
  _mysql.query = function (pool,sql) {
    var deferred = Q.defer();
    // log.error(sql);
    pool.getConnection(function (err, conn) {
        if (err) {
          deferred.reject(err);
        }
        conn.query(sql,function(err,rows){
          // log.error(rows.length);
            if (err !== null) {
              deferred.reject(err);
            }else{
              deferred.resolve(rows);
            }
            conn.release();
        });
        return deferred.promise;
    });
      return deferred.promise;
  };

    module.exports = _mysql;

}());

