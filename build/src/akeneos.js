"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
require('dotenv').config();
var request = require('request');
class Akeneo {
    constructor(expiresAt, accessToken, refreshToken) {
        this.expiresAt = 0;
        console.log(this.authenticate());
        this.expiresAt = expiresAt;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
        //this.getData();
        console.log(this.accessToken);
    }
    async authenticate() {
        var options = {
            'method': 'POST',
            'url': 'http://10.0.55.77:8080/api/oauth/v1/token',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
            },
            form: {
                'grant_type': 'password',
                'username': 'l24_master_dataconnector_9892',
                'password': '2b78612b7'
            }
        };
        request(options, function (error, response) {
            if (error)
                throw new Error(error);
            console.log(response.body);
        });
    }
}
module.exports = Akeneo;
//# sourceMappingURL=akeneos.js.map