"use strict";
const http = require('http');
class AkeneoConnection {
    constructor() { }
    postData() {
        const option = {
            method: 'GET',
            url: 'http://10.0.55.77:8080/api/rest/v1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // eslint-disable-next-line prettier/prettier
                'Authorization': 'Bearer MTI3MDA2YmU4MDUxZTg1NDA2MjNiNDA4YThlNmU5MDg4NmQ4MDZkMzI5NWM4MmYxMDU3NDcwZWNhZDZjZWNkNw',
            },
            form: {
                grant_type: process.env.GRANT_TYPE,
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
            },
        };
        const req = http.request(option, (error, response) => {
            if (error)
                throw error;
            const access_token = Object.entries(JSON.parse(response.body));
            console.info(access_token[0][1]);
        });
        req.on('error', (e) => {
            console.error(e);
        });
        req.end();
    }
}
module.exports = AkeneoConnection;
//# sourceMappingURL=akeneoConnection.js.map