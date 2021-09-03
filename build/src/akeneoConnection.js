"use strict";
const http = require('http');
const getheaders = {
    'Content-Type': 'application/json',
    // eslint-disable-next-line prettier/prettier
    'Authorization': 'Bearer Y2JmMzc3YTdiMDkxZjY1NTViMzU3N2E5ODAwNWZiYTgxZTg3ZTc2NjM2YmY5ZmU0Nzg5MTc5MmNlMmU2MzVhNg',
};
const options1 = {
    host: '10.0.55.77',
    port: 8080,
    path: '/api/rest/v1/products/15554974',
    headers: getheaders,
    method: 'GET',
};
const req = http.request(options1, (res) => {
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