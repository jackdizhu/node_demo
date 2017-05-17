(function () {

    const http2 = require('./http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          log = require('./logger.js');
    var httpsO = {
        // U: 'http://www.cnblogs.com/post/prevnext?postId=6049237&blogId=239339&dateCreated=2016%2F11%2F10+0%3A25%3A00',
        U: 'https://nodejs.org/api/https.html#https_https_get_options_callback',
        // _http2: 'http'
        _http2: 'https'
    };
    http2(httpsO).then(function (data) {
      log.debug(data);
    });

    // getSrc(imgSrc).pipe(fs.createWriteStream('./'+ name[0]));  保存图片代码

}());
