"use strict";
const http = require('http');
const getheaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer MWYzMDI1MDI5MjM3YmQxMzMwMmUwYWVkMzQxY2YxMjU2NjNmYjM3ZDVhZjUzMjY3ZDYzYWVjNWJmYjRmYTc2OQ',
};
const options = {
    host: '10.0.55.77',
    port: 8080,
    path: '/api/rest/v1/products/594877',
    headers: getheaders,
    method: 'GET', // do GET
};
const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        const obj = Object.entries(JSON.parse(d).values);
        console.info(obj);
        //console.log(d);
        //process.stdout.write(d);
    });
});
req.on('error', (e) => {
    console.error(e);
});
req.end();
module.exports = req;
//# sourceMappingURL=akeneoConnection.js.map