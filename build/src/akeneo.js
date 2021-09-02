"use strict";
const http = require('http');
require('dotenv').config();
//const request = require('request');
const options = {
    method: 'GET',
    host: process.env.host,
    port: 8080,
    path: '/api/rest/v1/products/',
    headers: {
        'Authorization': 'Bearer YTMxYThiZDBlMDRiNmI5YzExZTdkOTQ1MzczYTRjZWE2MzBmOGYzNzZjNzNiMzBlMjcwMDIzZmE0OGRmYTI2Yg',
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: 'BAPID=ej4k1m2mv5i9frfvrc05l9v5pj',
    },
    form: {
        grant_type: process.env.grant_type,
        username: process.env.username,
        password: process.env.password,
    },
};
http.request(options, (error, response) => {
    if (error)
        throw new Error(error);
    console.log(response.form);
    console.log('test');
});
module.exports = http;
//# sourceMappingURL=akeneo.js.map