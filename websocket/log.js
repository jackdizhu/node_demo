(function () {
    var logger = require('./logger.js');
    var _log = {
        log: function (a) {
            console.log(a);
            logger.debug(a);
        }
    };

    module.exports = _log.log;

}());
