(function () {

    const http2 = require('./http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          saveJson = require('./saveJson.js'),
          log = require('./logger.js');

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
        http2(httpsO).then(function (data) {

          isLoading = false;

          var $ = cheerio.load(data);
          var a = $('.v-align-middle');
          for (var i = 0; i < a.length; i++) {
            aU.push(host+a[i].attribs.href)
          }

          var paging = $('.pagination').find('a');
          for (var j = 0; j < paging.length; j++) {
            if(paging[j].attribs.rel == 'next'){
              httpsO.U = host + paging[j].attribs.href;
              isLoading = true;
              break;
            }
          }
          if(isLoading == false){
            // 保存 json 数据
            saveJson(aU);
            // log.debug(aU);
          }else{
            get();
          }
        });
    }
    
    get()

    // getSrc(imgSrc).pipe(fs.createWriteStream('./'+ name[0]));  保存图片代码

}());
