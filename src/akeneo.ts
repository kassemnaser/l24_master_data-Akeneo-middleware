import axios, {AxiosResponse} from 'axios';
import {Buffer} from 'buffer';
import DB from './db';
require('dotenv').config();

export default class Akeneo {
  public accessToken = '';
  private refreshToken = '';
  private expiresAt = 0;

  constructor() {}

  /**
   * authenticates to the Akeneo PIM.
   * */
  public async authenticate(): Promise<any> {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(process.env.CLIENT_ID + ':' + process.env.SECRET).toString('base64'),
      },
    });

    const response: AxiosResponse = await request.post(
      process.env.SERVER + '/api/oauth/v1/token',
      {
        grant_type: process.env.GRANT_TYPE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      }
    );

    this.accessToken = response.data.access_token;
    this.refreshToken = response.data.refresh_token;
    this.expiresAt = response.data.expires_in;
    //return this.accessToken;
  }

  /**
   * get products form Akeneo.
   * */
  public async getProducts() {
    await axios.get(process.env.SERVER + '/api/rest/v1/products/1111111171', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken,
        },
      }).then((response: AxiosResponse) => {
        console.log(response.data);
      }).catch(error => console.log(error));
  }

  /**
   * creates a new product in Akeneo
   * */
  public async createProduct() {

    const sku = {
      "identifier": "Sku-123",
      "enabled": true,
      "family": null,
      "categories": [],
      "groups": [],
      "parent": null,
      "values": {
        "name": [],
        "description": [
          {
            "data": "Creat product",
            "locale": "en_US",
            "scope": "ecommerce"
          }
        ]
      }
    };

    const config: any = {
      method: 'post',
      url: process.env.SERVER + '/api/rest/v1/products',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken,},
      data : sku
    };
    axios(config)
        .then(function (response: AxiosResponse) {
          response.data;
        }).catch(function (error) {
          console.log(error);
        });
  }

    /**
     * updates the products in Akeneo.
     * */
  public async updateProduct(){
    const sku = {
      "identifier": "Sku-update",
      "enabled": true,
      "family": null,
      "categories": [],
      "groups": [],
      "parent": null,
      "values": {
      "name": [],
        "description": [
          {
            "data": "update the created product",
            "locale": "en_US",
            "scope": "ecommerce"
          }
        ]
      }
    };

    const config: any = {
    method: 'patch',
    url: process.env.SERVER + '/api/rest/v1/products/1248',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken,
    },
    data : sku
    };

    axios(config).
      then(response =>{
      console.log(response.data);
      }).catch(error => {
      console.log(error);
      });
  }

    /**
     * deactivates the products in Akeneo.
     * */
  public async deactivateProduct() {

    const config: any = {
      method: 'delete',
      url: process.env.SERVER + '/api/rest/v1/products/sku-update',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Yjg2ZmM4YTAwNTE4NWEyMTVmZWVhZjA5MzRkMTgzYWIzZDc0Y2YyYzY4ZmRhZjVkMTJiMjUxNzQ3NDM0MDI3Yw'
      }
    };

    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

}
