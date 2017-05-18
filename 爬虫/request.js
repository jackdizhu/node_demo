(function () {

    const http2 = require('./http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          Q = require('q'),
          log = require('./logger.js'),
          getAgent = require('./getAgent.js'),
          http = require('http');

      var time;
      function _request(agent,i) {
          var defer=Q.defer();
          const opt = {
            proxy: 'http://46.44.46.241:8081',
            method: 'GET',
            url: 'http://ip.chinaz.com/getip.aspx',
            timeout: 8000,
            encoding: null,
            // host: '101.200.171.195',
            // port: 80,
            headers: {
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              'Accept-Encoding': 'gzip, deflate',
              'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
              'User-Agent': 'Mozilla/8.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
              'referer': 'http://www.66ip.cn/'
            }
          };
          // log.debug(opt);
          getSrc(targetOptions, function (error, response, body) {
              try {
                  if (error) {defer.reject(err);};
                  body = body.toString();
                  // log.debug(response.request.proxy.host);
                  eval(`var ret = ${body}`);
                  if (ret) {
                      log.debug(`验证成功: ${response.request.proxy.host} ==>> ${ret.address}`);
                      defer.resolve(`验证成功: ${response.request.proxy.host} ==>> ${ret.address}`);
                  }
              } catch (e) {
                  defer.reject(err);
                  // console.error(e);
              }
              return defer.promise;
          });
          // http.request(opt, function(res) {
          //   var html = '';
          //   console.log("response statusCode: " + res.statusCode);
          //   res
          //   .on('data',function(data){
          //     html += data;
          //   })
          //   .on('end', function(){
          //     defer.resolve(html);
          //   })
          //   on('error',function (err) {
          //     // console.log(err);
          //     defer.reject(err);
          //   });
          //   return defer.promise;
          // });
          return defer.promise;
      }

      var opt = {
        proxy: 'http://45.33.73.27:3128',
        method: 'GET',
        url: 'http://ip.chinaz.com/getip.aspx',
        timeout: 8000,
        encoding: null,
    };
    proxyList = [];
    //这里修改一下，变成你要访问的目标网站
    function _getSrc() {
      getSrc(opt, function (error, response, body) {
          try {
              if (error) throw error;
              body = body.toString();
              eval(`var ret = ${body}`);
              if (ret) {
                  log.debug(`成功: ${response.request.proxy.host} ==>> ${ret.address}`);
              }
          } catch (e) {
              console.error(e);
          }
      });
    }
    getAgent().then(function (data) {
      // for (var i = 0; i < data.length; i++) {
      //   proxyList.push('http://'+data[i].ip+':'+data[i].ipport);
      // }
      // log.debug(data);
      data.forEach(function (li) {
        opt.proxy = 'http://'+li.ip+':'+li.ipport;
        opt.port = li.ipport;
        _getSrc();
      });
    });
    _getSrc();

}());
