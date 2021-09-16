import axios, {AxiosResponse} from "axios";
import {Articles} from './articles';
require('dotenv').config();


export default class Akeneo {

  private expiresAt: number = 0;
  public accessToken: string = '';
  private refreshToken: string = '';

  constructor() {}

  public async authenticate(): Promise<any> {
      const request = axios.create({
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic OF80MjFqcDFvMjZ0a3djODBnczAwMGdjZ2tjNG9rOHcwZ2tnd3M0MGc0Z2NzMHM4Y293dzoxYXVjYzJmb21oeGN3Z29vdzhjNDg0b2NjNGdzZ2dnc3djazA4NDQ4dzRjc2NjODA0Zw=='
          }
      })

      const response: AxiosResponse = await request.post(process.env.SERVER + '/api/oauth/v1/token', {
          grant_type: process.env.GRANT_TYPE,
          username: process.env.USERNAME,
          password: process.env.PASSWORD
      })

      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      this.expiresAt = response.data.expires_in;
  }

  public async getProducts() {

      await axios.get(process.env.SERVER + '/api/rest/v1/products/1111111171', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.accessToken,
          }
      }).then((response: AxiosResponse) => {
          console.log(response.data);
      }).catch((error) => console.log(error));
  }

  public async importProducts() {
      
      const article = new Articles();
      await axios.post(process.env.SERVER + '/api/rest/v1/products/', {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken,
          data : article.findAll,
      })
      .then((response: AxiosResponse) => {
          console.log(response.data)
      }).catch((error) => console.log(error));

  }

}