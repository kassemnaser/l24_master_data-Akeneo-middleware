"use strict";
/*
import fetch from "node-fetch";
import btoa = require("btoa");
const http = require('http');
require('dotenv').config();

class Akeneo {

  private expiresAt = 0;
  private accessToken: string;
  private refreshToken = '';

  constructor(expiresAt: number, token: any, refreshToken: any) {
    console.log(this.authenticate());
    this.expiresAt = expiresAt;
    this.refreshToken = refreshToken;
    this.accessToken = token;
    //this.getData();
    //console.log(this.token);
  }

  private async authenticate(): Promise<any> {

    const options = await fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/api/oauth/v1/token',{
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
      } else {
        console.error(`Request returned status "${response.status}"`)
        return false
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
    } else {
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
        'Authorization': 'Bearer ' + this.accessToken,
      },
    };
    console.log(this.accessToken);
    const req = http.request(option, (res: any) => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', (d: any) => {
        console.log(d);
      })
    })
    req.on('error', (error: Error) => {
      console.error(error)
    })
    req.end();
  }
}

module.exports = Akeneo;

 */
//# sourceMappingURL=akeneo.js.map