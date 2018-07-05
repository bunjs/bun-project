/**
 * 日志插件（封装yog-log）
 *
 * @file logger
 * @author liguohui01
 */

var logger = require('yog-log');
var path = require('path');
var options = {
    format_wf: '%L: %t [%f:%N] errno[%E] %M',
    format: '%L: %t [%f:%N] errno[%E] %M',
    log_path: bun.LOG_PATH+'/bun'
};

module.exports = (function () {
    
    return {
        notice: function (msg) {
            if (!options.disable) {
                
                var content = Array.prototype.slice.call(arguments, 0).join(' ');

                logger.getLogger(options).notice('[bunko] ' + content);
            }
        },
        warning: function (msg) {
            if (!options.disable) {
                
                var content = Array.prototype.slice.call(arguments, 0).join(' ');
                logger.getLogger(options).warning('[bunko] '  + content);
            }
        },

        fatal: function (msg) {
            if (!options.disable) {
                
                var content = Array.prototype.slice.call(arguments, 0).join(' ');
                logger.getLogger(options).fatal('[bunko] ' + content);
            }
        },

        trace: function () {
            if (!options.disable) {
            
                var content = Array.prototype.slice.call(arguments, 0).join(' ');
                logger.getLogger(options).trace('[bunko] '  + content);
            }
        },

        debug: function (msg) {
            if (!options.disable) {
             
                var content = Array.prototype.slice.call(arguments, 0).join(' ');
                logger.getLogger(options).debug('[bunko] '  + content);
            }
        }
    };
})();

module.exports.__defineSetter__('options', function (opts) {
    options = opts;
});