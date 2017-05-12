

    var log = require('./log.js');

    var WebSocket = require('ws');
    var fs= require('fs');


    var W = new WebSocket.Server({
            port: 8000,
            verifyClient: function (e) {
                var WSkey = e.req.headers['sec-websocket-key'];

                return true;
            }
        });

    W.sendMsg = function (data,_data) {

        W.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                var WSkey = client.upgradeReq.headers['sec-websocket-key'];

                log(WSkey);

                if(client.upgradeReq.userKey == _data.data.to){
                    client.send(data);
                }
            }
        });
    };

    W.on('connection', function (ws) {
        // console.log('client connected');
        ws.on('message', function (data) {
            var WSkey = ws.upgradeReq.headers['sec-websocket-key'];

            var _D = JSON.parse(data);

            if(!ws.upgradeReq.userKey){
                if(_D.userKey){
                    ws.upgradeReq.userKey = _D.userKey;
                }else{
                    ws.close();
                }
            }else{
                var _data = {
                    clientsL: W.clients.length,
                    data: {
                        form: _D.data.form,
                        to: _D.data.to,
                        txt: _D.data.txt,
                        pull: 'left'
                    }
                };
                var str = JSON.stringify(_data);
                W.sendMsg(str,_data);
            }

        });
    });



