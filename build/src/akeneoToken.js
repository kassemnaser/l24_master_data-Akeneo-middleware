"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
async function generateTokenFromCode(code, client_id, client_secret) {
    var _a;
    const data = {
        client_id,
        client_secret,
        code
    };
    const res = await axios_1.default.post('http://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token', data, {
        headers: {
            Accept: 'application/json'
        }
    });
    if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.error) === 'bad_verification_code') {
        throw new Error('Github server denied authorization code.');
    }
    return res;
}
//# sourceMappingURL=akeneoToken.js.map