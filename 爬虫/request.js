(function () {

    const http = require('http'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          request = require('request'),
          log = require('./logger.js');
    var U = 'http://www.gooofashion.com/index.php?app=goods_list&type=new&list1=1';
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
            if(imgSrc){
              request(imgSrc).pipe(fs.createWriteStream('./'+ 'test.png'));
            }
        })
        .on('error', function (err) {
            console.log(err);
        });
    });


}());
