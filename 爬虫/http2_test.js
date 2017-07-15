(function () {

    const http2 = require('./http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          saveJson = require('./saveJson.js'),
          log = require('./logger.js');

    var searchT = encodeURI('爬虫');

    var http = require('http')

var querystring = require('querystring')
var postData = querystring.stringify({
    'content':'更新太慢勒',
    'mid':8837
});
var options = {
    hostname:'www.imooc.com',
    port:'80',
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=fe4eb00a-b08b-4442-a87d-c077f0fa94dc; imooc_isnew_ct=1482112514; loginstate=1; apsid=I3ODRkMzRiY2MzNjZkZDlkNzZkZDk3OGYwNGFkYTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTAyNjA1OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMjE0NDgzNjM5QHFxLmNvbQAAAAAAAAAAAAAAAAAAADhjOTM3MTEyMTVkZDJkODBiZGQ5MGZhYjUxZDk2YTNkADZbWAA2W1g%3DYj; last_login_username=1214483639%40qq.com; PHPSESSID=dlq6ctudtje87erfq523b0dak7; jwplayer.volume=71; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1482112514,1482372528,1482377953,1482457056; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1482460689; imooc_isnew=2; cvde=585c7fe052b01-26',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var httpsO = {
    _http2: 'http',
    opt: options,
    postData: postData
};

http2(httpsO).then(function (data) {
  console.log(data);
});


}());
