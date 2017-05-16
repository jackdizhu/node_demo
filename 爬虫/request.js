(function () {

    const http = require('http'),
          fs = require('fs'),
          $ = require('cheerio'),
          req = require('request'),
          log = require('./logger.js');
    var U = 'http://www.baidu.com';
    http.get(U, function (res) {
        // 页面数据
        var html = '';
        var titles = [];
        res.setEncoding('utf-8');
        res
        .on('data', function (data) {
            html += data;
        })
        .on('end', function () {
            log.debug(html);
        })
        .on('error', function (err) {
            console.log(err);
        });
    });


}());
