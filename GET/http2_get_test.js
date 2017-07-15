(function () {

    const http2 = require('http2_req'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          log = require('./lib/log.js');

    var searchT = encodeURI('爬虫');

    var httpsO = {
        // U: 'http://www.cnblogs.com/post/prevnext?postId=6049237&blogId=239339&dateCreated=2016%2F11%2F10+0%3A25%3A00',
        U: 'https://github.com/search?l=JavaScript&o=desc&q='+searchT+'&s=stars&type=Repositories&utf8=%E2%9C%93',
        // _http2: 'http'
        _http2: 'https'
    };
    // 是否继续加载
    var isLoading = true;
    var host = 'https://github.com';
    var page = 1;

    var aU = [];
    var get = function () {
        if(!isLoading){return;}
        http2.get(httpsO).then(function (data) {
            log({
                err: data
            });
        });
    }

    get()

    // getSrc(imgSrc).pipe(fs.createWriteStream('./'+ name[0]));  保存图片代码

}());
