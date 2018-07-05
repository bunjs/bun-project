'use strict'
require('babel-register');
global.bun = require('bun-skin');
bun.Bootstrap({
    ROOT_PATH: __dirname,
    port: 8000
});

