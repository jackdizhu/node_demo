(function () {

    const http2 = require('./lib/http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          log = require('./lib/log.js');

    var searchT = encodeURI('爬虫');

    var http = require('http')

var querystring = require('querystring')
var postData = querystring.stringify({
    'content':'更新太慢勒',
    'mid':8837
});
var options = {
    hostname:'cnodejs.org',
    port:'443',
    path:'/topic/582d9e99892500ee7867c00d',
    method:'GET',
    headers:{
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        // 不能开启 gzip
        // 'Accept-Encoding':'gzip, deflate, sdch',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'no-cache',
        'Pragma':'no-cache',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'UM_distinctid=15d34963057ce-000c2e31081cd8-414a0229-1fa400-15d349630585ac; connect.sid=s%3APMJdQvoHwfI0WvYGOEEAXQGgKKK26Hi-.s3VsM4x3bdHl5SxGG8bNAC9U3ybi90PzG5F3u2m0PW4; CNZZDATA1254020586=482105769-1499822803-null%7C1500101463; _ga=GA1.2.1937253406.1499825846; _gid=GA1.2.1227576603.1499825846',
        'Host':'cnodejs.org',
        'Origin':'https://cnodejs.org/topic/582d9e99892500ee7867c00d',
        'Referer':'https://cnodejs.org/topic/582d9e99892500ee7867c00d',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}
var httpsO = {
    _http2: 'https',
    opt: options,
    postData: postData
};

http2(httpsO).then(function (data) {
    // var $ = cheerio.load(data);
    // var li = $('#topic_list').find('.cell');
    // var lis = [];
    // var tit;
    // for (var i = 0; i < li.length; i++) {
    //     tit = cheerio.load(li[i]).find('.topic_title').html();
    //     lis.push(tit);
    // }
      log({
        err: data
      });
});


}());
