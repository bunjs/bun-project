'use strict'
require('@babel/register');
require('@babel/polyfill');
require('bun-skin').Bootstrap({
    ROOT_PATH: __dirname,
    port: 8000
});

