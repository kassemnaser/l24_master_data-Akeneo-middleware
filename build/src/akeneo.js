"use strict";
const http = require('http');
require('dotenv').config();
//const request = require('request');
const options = {
    method: 'GET',
    url: 'http://10.0.55.77:8080/api/rest/v1/products/',
    headers: {
        'Authorization': 'Bearer M2ExN2I5MGNiOGE5YzgzYzNiYzQ3OTQ3YjUzNmY2N2E3ZDI5OTdjYTNjNmMwNDM5ZjJjZGRkYzg1MTlmMDUzNg',
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: 'BAPID=ej4k1m2mv5i9frfvrc05l9v5pj',
    },
    form: {
        grant_type: process.env.grant_type,
        username: 'l24_master_dataconnector_9892',
        password: '2b78612b7',
    },
};
const req = http.request(options, (error, response) => {
    if (error)
        throw new Error(error);
    console.log(response.body);
});
module.exports = req;
//# sourceMappingURL=akeneo.js.map