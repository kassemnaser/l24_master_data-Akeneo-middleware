import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import Akeneo from './akeneo';

export const l24_master_dataFunc: HttpFunction = async (req, res) => {
  res.send('Hello, World');
  // include dbConnection
  //const DB = require('./db');
  //const myDB = new DB();
  //myDB.readArticles();

  const client = new Akeneo();
  await client.authenticate();
  //await client.getProducts();
  await client.importProducts();
  //const token = require('./auth')
  //const dd = new token();
  //dd.token();
  //dd.getArticles();
};

