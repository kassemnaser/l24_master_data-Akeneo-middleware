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
        console.log(this.authenticate());
        this.expiresAt = expiresAt;
        this.refreshToken = refreshToken;
        this.token = token;
        console.log(this.token);
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
                console.log('tooooooooooooooooken: ' + this.token);
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
        /*
         request(options, (error: Error, response: any) => {
          if (error) throw error;
          // access_token
          const access_token = Object.entries(JSON.parse(response.body));
          return access_token[0][1];
    
          // refresh_token
          //const refresh_token = Object.entries(JSON.parse(response.body));
          //this.refreshToken = refresh_token[4][1];
          //console.log(response.body);
          //this.refreshToken = JSON.parse(response.body);
          //this.expiresAt = Date.now() + 60 * 1000;
          //console.log('done');
        });*/
    }
}
module.exports = Akeneo;
//# sourceMappingURL=akeneo.js.map