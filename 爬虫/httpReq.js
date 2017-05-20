(function () {

/**
 * _http = {
 *   http: {
 *          get: () => {},
 *          post: () => {}
 *       },
 *   https: {
 *          get: () => {},
 *          post () => {}
 *       }
 * };
 */

/**
 * 
 *  // 参数
    var httpsO = {
        // GET 数据
        U: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue',
        // POST 数据
        postData: {
          loginName: '159555666'
        },
        opt: {
            hostname: 'www.jd.com',  
            // 443 https端口 80 http端口
            port: 443,  
            path: '/',  
            method: 'POST',  
            headers: {  
                'content-length': '21',
                'content-type': 'text/plain;charset=UTF-8',
                'pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Host': 'passport.jd.com',
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 QIHU 360EE',
                'Cookie': 'unpl=V2_ZzNtbRYHShV0WxFSfxwLBWJQQQ0RU0ERIApEVntLWgJgBBMIclRCFXMUR1BnGl0UZwcZWERcQRZFCHZXchBYAWcCGllyBBNNIEwHDCRSBUE3XHxcFVUWF3RaTwEoSVoAYwtBDkZUFBYhW0IAKElVVTUFR21yVEMldQl2VHobXg1nBxpUQmdzEkU4dlx8HlQCbjMTbUNnAUEpAURRfRhcSGcCEF9KV0cdfAh2VUsa; CCC_SE=ADC_k%2bO%2ffp1gUm%2b%2fw5cTWE1iJBIyqqfjAuzleBbr2khLTMp8jdNCVbhtKviZosJg1LDHbYrbsuQrx%2faryufE8t%2f%2fTwIfCggeQwAiu8wppSNtpz3Gr4k1C4YxyWcYSnsLMKmaJHbDwggTEOc1vQ101JOJyN7aF2pE98dQBW%2fiBSz5X1cs34UKznp0ivnpP3Z6CQphArzk4HgAjSCAmG0jxBkrfrDAXetzDAE7glWX37RKPlcqOQEYDI3WkHl2BLgx%2bSHv4KHHpFmElwItcqwxE0K%2fsRnno08pVFhrzotwjXECgXuVft0QHChkNnRbBnt2zwiUf78is1TRnWyx1HkB8HWQ9h4oAkrKHrj9aCNBtcxqK6LYYjrsrB%2f0%2bRx6QTlH0f6OnIYQlfU5afi14zNXX9yzSb5516eHVac5hyo4zU0ub4Wl2jJm53I9n8frKxX0Xy%2fZ59zC%2boP27ci1LKERCwIgx3Pj6hd0NuKKZ5MsFaLYtuAODXIQ3yao5lD4c6K%2bKT6IyaIKtM7R%2bC%2f%2fztVe0iOrGxwHiVhAHz333bJQR3G3VCTTbHPbOPAxZrMrudaRV0ym; __jdv=122270672|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ea810bf754f14bbab535d3331c76660d|1495266499784; qr_t=c; alc=1nwSpQAJcUmLUsRmQq2ktQ==; _ntTUCeP=YnR3lycB+kWQBJzE81NG98QHB2BPsODRGaHcttwpaZs=; wlfstk_smdl=cw5mu4wln0s8d73ispvjxv744a9ozg1b; __jda=122270672.1033915981.1495266498.1495266498.1495266500.1; __jdb=122270672.2.1033915981|1.1495266500; __jdc=122270672; _jrda=1; _jrdb=1495266508192; 3AB9D23F7A4B3C9B=X67W4XXEGY4PPKTYW54Y7NQ5VZY2RG7JGGAM2A53W3YXAG4NTEOEJTDAHRV7JS6T2UEVSTTNEBAWAY5UDANZBY4HAQ; __jdu=1033915981',
            }  
        }
    };
 * 
 */

    const http = require('http'),
          https = require('https'),
          qs = require('querystring'),
          Q = require('q');

    var _http = {
        http:{
            get: (options) => {
                var defer=Q.defer();
                http.get(options.U, (res) => {
                    // 页面数据
                    var html = '';
                    res.setEncoding('utf-8');
                    res
                    .on('data', (data) => {
                        html += data;
                    })
                    .on('end', () => {
                        defer.resolve(html);
                    })
                    .on('error', (err) => {
                        defer.reject(err);
                    });
                    return defer.promise;
                });
                return defer.promise;
            },
            post:  (options) => {
                var defer=Q.defer();

                var _postData =  options.postData; 
                var _opt = options.opt;
                var content = qs.stringify(_postData);  

                var req = http.request(_opt, (res) => {  
                    // 页面数据
                    var html;
                    res.setEncoding('utf8');  
                    res
                    .on('data', (data) => {
                        html += data;
                    })
                    .on('end', () => {
                        defer.resolve(html);
                    })
                    .on('error',(err) => {
                        defer.reject(err);
                    });
                    return defer.promise;
                });  
                req.on('error', (err) => {  
                    defer.reject(err);
                });  
                req.write(content);  
                req.end();  
                return defer.promise;
            }
        },
        https:{
            get:  (options) => {
                var defer=Q.defer();
                https.get(options.U, (res) => {
                    // 页面数据
                    var html = '';
                    res.setEncoding('utf-8');
                    res
                    .on('data', (data) => {
                        html += data;
                    })
                    .on('end', () => {
                        defer.resolve(html);
                    })
                    .on('error',(err) => {
                        defer.reject(err);
                    });
                    return defer.promise;
                });
                return defer.promise;

            },
            post: (options) => {
                var defer=Q.defer();

                var _postData =  options.postData; 
                var _opt = options.opt;
                var content = qs.stringify(_postData);  

                var req = https.request(_opt, (res) => {
                    // 页面数据
                    var html = '';
                    res.setEncoding('utf8');  
                    res
                    .on('data', (data) => {
                        html += data;
                    })
                    .on('end', () => {
                        defer.resolve(html);
                    })
                    .on('error',(err) => {
                        defer.reject(err);
                    });
                    return defer.promise;
                });
                req.on('error', (err) => {  
                    defer.reject(err);
                });  
                req.write(content);
                req.end();
                return defer.promise;
            }
        }
    };

    module.exports = _http;

}());
