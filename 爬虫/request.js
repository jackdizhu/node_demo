(function () {

    const http = require('http'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          log = require('./logger.js');
    var U = 'http://www.th7.cn/d/file/p/2016/10/15/e5ade4d729e5005b18862b8b609c5fbe.jpg';
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
            var $ = cheerio.load(html);
            // 打印 页面 内容
            log.debug(html);
            var imgSrc = $('img')[0].attribs.src;
            // 保存图片资源
            log.debug(imgSrc);
            var r = /([^/]+.[a-z]+)$/g;
            var name = imgSrc.match(r);
            if(imgSrc){
              getSrc(imgSrc).pipe(fs.createWriteStream('./'+ name[0]));
            }
        })
        .on('error', function (err) {
            console.log(err);
        });
    });


}());
