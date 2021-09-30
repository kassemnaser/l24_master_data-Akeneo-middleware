"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const buffer_1 = require("buffer");
require('dotenv').config();
class Akeneo {
    constructor() {
        this.accessToken = '';
        this.refreshToken = '';
        this.expiresAt = 0;
    }
    /**
     * authenticates to the Akeneo PIM.
     * */
    async authenticate() {
        const request = axios_1.default.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + buffer_1.Buffer.from(process.env.CLIENT_ID + ':' + process.env.SECRET).toString('base64'),
            },
        });
        const response = await request.post(process.env.SERVER + '/api/oauth/v1/token', {
            grant_type: process.env.GRANT_TYPE,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
        });
        this.accessToken = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        this.expiresAt = response.data.expires_in;
        //return this.accessToken;
    }
    /**
     * get products form Akeneo.
     * */
    async getProducts() {
        await axios_1.default.get(process.env.SERVER + '/api/rest/v1/products/1111111171', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken,
            },
        }).then((response) => {
            console.log(response.data);
        }).catch(error => console.log(error));
    }
    /**
     * imports products into Akeneo.
     * */
    async importProducts() {
        const sku = {
            "identifier": "sku-123",
        };
        await axios_1.default.post(process.env.SERVER + '/api/rest/v1/products', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + this.accessToken,
            },
            body: {
                sku
            }
        }).then((response) => {
            console.log(response.data);
        }).catch(error => console.log(error));
    }
    async createProduct() {
        const sku = {
            "identifier": "sku-12333",
        };
        const config = {
            method: 'post',
            url: process.env.SERVER + '/api/rest/v1/products',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken,
            },
            data: sku
        };
        axios_1.default(config)
            .then(function (response) {
            response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
}
exports.default = Akeneo;
//# sourceMappingURL=akeneo.js.map