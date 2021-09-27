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
   * imports products into Akeneo.
   * */
  public async importProducts() {
    await axios.post(process.env.SERVER + '/api/rest/v1/products', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + this.accessToken,
        },
      }).then((response: AxiosResponse) => {
        console.log(response.data);
      }).catch(error => console.log(error));
  }

  /*
    // updates the products in Akeneo.
    public async updateProducts(){
        console.log('updating the imported products');
    }
    */

  /*
    // deactivate the products in Akeneo.
    public async deactivateProducts() {
        const headers = {
            'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.accessToken,
        }
        await axios.patch(process.env.SERVER + '/api/rest/v1/products/{}', headers, {
            data: this.getProducts(),
        }).then((response: AxiosResponse) => {
            console.log(response.data);
        }).catch(error => console.log(error));
    }
   */
}
