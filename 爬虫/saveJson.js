
(function (){
    'use strict';
    const fs = require('fs');

    var filename = './logs/ojson.js';
    var saveJson = function (Ojson){
        var data = new Buffer(JSON.stringify(Ojson));
        fs.writeFile(filename, data, function (err){
            if (err) {
                console.log(err);
            }else{
                console.log('saved!');
            }
        });
    };
    module.exports = saveJson;

}());