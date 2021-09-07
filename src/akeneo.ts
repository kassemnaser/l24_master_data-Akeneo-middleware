import {response} from "express";
import fetch from "node-fetch";
import btoa = require("btoa");
import { stringify } from 'query-string';

const http = require('http');

require('dotenv').config();
const request = require('request');

class Akeneo {
  endpoints = ['products', 'categories'];
  expiresAt = 0;
  public token = null;
  public refreshToken = null;

  constructor(expiresAt: number, token: any, refreshToken: any) {
    console.log(this.authenticate());
    this.expiresAt = expiresAt;
    this.refreshToken = refreshToken;
    this.token = token;
    console.log(this.token);
  }

  async connect() {
    if (this.expiresAt > Date.now()) {
      await this.authenticate();
    }
  }

  async authenticate() {
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
    }).then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        console.error(`Request returned status "${res.status}"`)
        return false
      }
    }).catch((err) => {
      console.error(err);
      return false;
    });

    if (options !== false) {
      this.token = options.access_token;
      this.refreshToken = options.refresh_token;
      this.expiresAt = Date.now() + options.expires_in * 1000;
      console.debug('OAuth authentication successful')
    } else {
      console.debug('OAuth authentication failed')
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
    const req = http.request(option, (res: any) => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log('teeeeeeeeeeeeeeeeest');
      res.on('data', (d: any) => {
        //const obj = Object.entries(JSON.parse(d).values.Translate1[0])
        console.info(d.toString('utf8'));
      })
    })
    req.on('error', (error: Error) => {
      console.error(error)
    })
    req.end();
  }
}

module.exports = Akeneo;
