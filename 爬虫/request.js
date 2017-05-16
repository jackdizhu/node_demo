(function () {

    const http = require('http'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          log = require('./logger.js');
    var U = 'http://www.cnblogs.com/post/prevnext?postId=6049237&blogId=239339&dateCreated=2016%2F11%2F10+0%3A25%3A00';
    var U2 = [];
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
            var imgSrc,name,pageU = [];
            if($('img').length){
              imgSrc = $('img')[0].attribs.src;
            }
            // var a = $('#post_next_prev a').children().length;
            var a = $('.p_n_p_prefix');
            for (var i = 0; i < a.length; i++) {
              pageU.push(a[i].attribs.href);
            }
            log.debug(pageU);
            // 保存图片资源
            log.debug(imgSrc);
            var r = /([^/]+.[a-z]+)$/g;
            if(imgSrc){
              name = imgSrc.match(r);
              getSrc(imgSrc).pipe(fs.createWriteStream('./'+ name[0]));
            }
        })
        .on('error', function (err) {
            console.log(err);
        });
    });


}());
