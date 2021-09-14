"use strict";
var axios = require('axios');
var qs = require('qs');
class Auth {
    constructor(expiresAt, accessToken, refreshToken) {
        this.expiresAt = 0;
        this.accessToken = '';
        this.refreshToken = '';
        //console.log(this.token());
        this.expiresAt = expiresAt;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
        console.log('test ' + this.accessToken);
        //this.getData();
        //console.log(this.token);
    }
    token() {
        var data = qs.stringify({
            'grant_type': 'password',
            'username': 'l24_master_dataconnector_9892',
            'password': '2b78612b7'
        });
        var config = {
            method: 'post',
            url: 'http://10.0.55.77:8080/api/oauth/v1/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
            },
            data: data
        };
        axios(config)
            .then(function (response) {
            JSON.stringify(response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
        if (data !== false) {
            this.accessToken = data.access_token;
            return this.accessToken;
        }
        else {
            console.debug('Authentication failed');
        }
    }
    getArticles() {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'grant_type': 'password',
            'username': 'l24_master_dataconnector_9892',
            'password': '2b78612b7'
        });
        var config = {
            method: 'get',
            url: 'http://10.0.55.77:8080/api/rest/v1/products/83300000058',
            headers: {
                'Authorization': 'Bearer ' + this.accessToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'BAPID=h1cmpg5fi5508jb6lla4acirp8'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
            console.log(error);
        });
    }
}
module.exports = Auth;
//# sourceMappingURL=auth.js.map