import fetch from "node-fetch";
//import btoa = require("btoa");
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {response} from "express";
//import qs from "qs";
require('dotenv').config();
//const articles = require('./articles');

export default class Akeneo {

  //private expiresAt: number = 0;
  public accessToken: string = '';
  //private refreshToken: string = '';

  constructor() {

    //this.authenticate();
    //this.expiresAt = 0;
    //this.refreshToken = '';

  }

    public async authenticate(): Promise<any> {

        const request = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
            }
        })

        const response: AxiosResponse = await request.post('http://10.0.55.77:8080/api/oauth/v1/token', {
            grant_type: 'password',
            username: 'l24_master_dataconnector_9892',
            password: '2b78612b7'
        })

        //this.accessToken = response.data.access_token;
        this.accessToken = response.data.access_token;

  }

  public async importProducts() {
      //console.log(this.accessToken)

      axios.get('http://10.0.55.77:8080/api/rest/v1/products/1111111171', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.accessToken,
          }
      })
          .then((response) => console.log(JSON.stringify(response.data)))
          .catch((error) => console.log(error))
  }

}

