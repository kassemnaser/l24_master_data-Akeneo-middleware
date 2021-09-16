"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const articles_1 = require("./articles");
require('dotenv').config();
class Akeneo {
    constructor() {
        this.expiresAt = 0;
        this.accessToken = '';
        this.refreshToken = '';
    }
    async authenticate() {
        const request = axios_1.default.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
            }
        });
        const response = await request.post(process.env.SERVER + '/api/oauth/v1/token', {
            grant_type: process.env.GRANT_TYPE,
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        });
        this.accessToken = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        this.expiresAt = response.data.expires_in;
    }
    async getProducts() {
        await axios_1.default.get(process.env.SERVER + '/api/rest/v1/products/1111111171', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken,
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => console.log(error));
    }
    async importProducts() {
        const article = new articles_1.Articles();
        await axios_1.default.post(process.env.SERVER + '/api/rest/v1/products/', {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken,
            data: article.findAll,
        })
            .then((response) => {
            console.log(response.data);
        }).catch((error) => console.log(error));
    }
}
exports.default = Akeneo;
//# sourceMappingURL=akeneo.js.map