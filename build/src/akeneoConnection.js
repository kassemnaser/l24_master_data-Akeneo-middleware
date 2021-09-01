"use strict";
const http = require('http');
const getheaders = {
    'Content-Type': 'application/json',
    // eslint-disable-next-line prettier/prettier
    'Authorization': 'Bearer YTUxZTE3OGI1NzE4YTQ1ZTVhNDYyMTgxMDQ5ZDQ0YjBiZGU5MzIxMDYwOTlhOWRkZWI1M2MzNjQ1MzZjNGRlYg',
};
const options = {
    host: '10.0.55.77',
    port: 8080,
    path: '/api/rest/v1/products/1111111132',
    headers: getheaders,
    method: 'GET', // do GET
};
const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        const obj = JSON.parse(d).values;
        console.log(obj);
    });
});
req.on('error', (e) => {
    console.error(e);
});
req.end();
module.exports = req;
//# sourceMappingURL=akeneoConnection.js.map