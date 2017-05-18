(function () {

    const http2 = require('./http2.js'),
          fs = require('fs'),
          cheerio = require('cheerio'),
          getSrc = require('request'),
          Q = require('q'),
          log = require('./logger.js'),
          getAgent = require('./getAgent.js'),
          http = require('http');

    var opt = {
      method: 'GET',
      timeout: 8000,
      encoding: null,
      proxy: 'http://45.33.73.27:3128',
      url: 'http://ip.chinaz.com/getip.aspx',
      headers:{
        //请求头
      }
    };
    var opt2 = {
      host: '',
      port: '',
      path: 'http://ip.chinaz.com/getip.aspx',
      method: 'GET',
      timeout: 8000,
      encoding: null,
      headers:{
        //请求头
      }
    };
    function _getSrc(li,opt) {
      opt.proxy = 'http://'+li.ip+':'+li.ipport;
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
    function _getSrc2(li,opt) {
      opt.host = li.ip;
      opt.port = li.ipport;
      http.request(opt, function (res) {
        var html;
        res
        .on('data',function(data){
          html += data;
        })
        .on('end', function(){
          // console.log(res.headers)
          console.log('html')
        });
      }).on('error', function(e) {
        console.log("error: e");
      });
    }
    getAgent().then(function (data) {
      data.forEach(function (li) {
        _getSrc(li,opt);
        // _getSrc2(li,opt2);
      });
    });

}());
