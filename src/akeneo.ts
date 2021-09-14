import fetch from "node-fetch";
import btoa = require("btoa");
const http = require('http');
require('dotenv').config();
const articles = require('./retrieveAllArticles')

class Akeneo {

  private expiresAt = 0;
  private accessToken = '';
  private refreshToken = '';

  constructor(expiresAt: number, accessToken: string, refreshToken: string) {
    //console.log(this.authenticate());
    this.expiresAt = expiresAt;
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
  }

  private async authenticate(): Promise<Response> {

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
    return options;
  }

  public importProducts() {
    const option = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken,
      },
    };

    fetch("http://10.0.55.77:8080/api/rest/v1/products/", option)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    articles.post('/products', articles.findAll);
  }
}

module.exports = Akeneo;
