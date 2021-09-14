"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const btoa = require("btoa");
const http = require('http');
require('dotenv').config();
const articles = require('./retrieveAllArticles');
class Akeneo {
    constructor(expiresAt, accessToken, refreshToken) {
        this.expiresAt = 0;
        this.accessToken = '';
        this.refreshToken = '';
        //console.log(this.authenticate());
        this.expiresAt = expiresAt;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
    }
    async authenticate() {
        const options = await node_fetch_1.default('http://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
            this.accessToken = options.access_token;
            console.log(this.accessToken);
            this.refreshToken = options.refresh_token;
            this.expiresAt = Date.now() + options.expires_in * 1000;
            console.debug('Authentication successful');
        }
        else {
            console.debug('Authentication failed');
        }
        return options;
    }
    importProducts() {
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken,
            },
        };
        node_fetch_1.default("http://10.0.55.77:8080/api/rest/v1/products/", option)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        articles.post('/products', articles.findAll);
    }
}
module.exports = Akeneo;
//# sourceMappingURL=akeneo.js.map