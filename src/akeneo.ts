import axios, {AxiosResponse} from "axios";
import {Articles} from './articles';
import {Buffer} from "buffer";

require('dotenv').config();


export default class Akeneo {

  private expiresAt: number = 0;
  public accessToken: string = '';
  private refreshToken: string = '';

  constructor() {

  }

  public async authenticate(): Promise<any> {
      const request = axios.create({
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + Buffer.from(process.env.CLIENT_ID + ':' + process.env.SECRET).toString('base64'),
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
      await axios.post(process.env.SERVER + '/api/rest/v1/products/articles', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.accessToken,
          },
          data: article.findAll,
      })
      .then((response: AxiosResponse) => {
          console.log(response.data);
      }).catch((error) => console.log(error));

  }

}