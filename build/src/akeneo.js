"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const btoa = require("btoa");
const http = require('http');
require('dotenv').config();
class Akeneo {
    constructor(expiresAt, token, refreshToken) {
        this.expiresAt = 0;
        this.token = '';
        this.refreshToken = '';
        //console.log(this.authenticate());
        this.expiresAt = expiresAt;
        this.refreshToken = refreshToken;
        this.token = token;
        //this.getData();
        //console.log(this.token);
    }
    /*
      async connect() {
        if (this.expiresAt > Date.now()) {
          await this.authenticate();
        }
      }
      */
    async authenticate() {
        const options = await node_fetch_1.default('http://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.SECRET),
            },
            body: JSON.stringify({
                grant_type: process.env.GRANT_TYPE,
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
            }),
        }).then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.error(`Request returned status "${response.status}"`);
                return false;
            }
        }).catch((err) => {
            console.error(err);
            return false;
        });
        if (options !== false) {
            this.token = options.access_token;
            console.log(this.token);
            this.refreshToken = options.refresh_token;
            this.expiresAt = Date.now() + options.expires_in * 1000;
            console.debug('Authentication successful');
        }
        else {
            console.debug('Authentication failed');
        }
    }
    getData() {
        const option = {
            method: 'GET',
            host: '10.0.55.77',
            port: 8080,
            url: '/api/rest/v1/products/83300000058',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            },
        };
        console.log(this.token);
        const req = http.request(option, (res) => {
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', (d) => {
                console.log(d);
            });
        });
        req.on('error', (error) => {
            console.error(error);
        });
        req.end();
    }
}
module.exports = Akeneo;
//# sourceMappingURL=akeneo.js.map