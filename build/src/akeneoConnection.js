"use strict";
const http = require('http');
const tokenRefresh = require('./authenticate');
const req = http.request(tokenRefresh, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        const obj = JSON.parse(d);
        console.log(obj);
    });
});
req.on('error', (e) => {
    console.error(e);
});
req.end();
module.exports = req;
//# sourceMappingURL=akeneoConnection.js.map