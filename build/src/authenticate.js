"use strict";
//const http = require('http');
require('dotenv').config();
const request = require('request');
const options = {
    method: 'POST',
    url: 'http://' +
        process.env.HOST +
        ':' +
        process.env.PORT +
        '/api/oauth/v1/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // eslint-disable-next-line prettier/prettier
        'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw==',
    },
    form: {
        grant_type: process.env.GRANT_TYPE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
};
function generateAccessToken() {
    request(options, (error, response) => {
        if (error)
            throw error;
        response.body.split(',').join('\n');
        //console.log(formattedString);
    });
}
const accessToke = generateAccessToken();
module.exports = accessToke;
//# sourceMappingURL=authenticate.js.map