/**
 * ral插件（封装yog-ral）
 *
 * @file ral
 * @author liguohui01
 */

var RAL = require('yog-ral').RAL;

// RAL.init({
//     confDir : bun.CONF_PATH + '/ral',
//     logger : {
//         "log_path" : bun.LOG_PATH + '/ral',
//         "app" : "yog-ral"
//     },
//     currentIDC : 'tc'
// });
module.exports = RAL;