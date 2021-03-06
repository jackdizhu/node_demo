(function () {
  'use strict';

  var Q = require('q'),
  log = require('./logger.js'),
  mysql = require('mysql');

  var _mysql = {};

  _mysql.client = function (config) {
    var pool = mysql.createConnection(config);
    return pool;
  }
  _mysql.query = function (pool,sql) {
    var deferred = Q.defer();

        pool.query(sql,function(err,rows){
          // log.error(rows.length);
            if (err !== null) {
              deferred.reject(err);
            }else{
              deferred.resolve(rows);
            }
            // pool.release();
        });
        return deferred.promise;
  };

    module.exports = _mysql;

}());

