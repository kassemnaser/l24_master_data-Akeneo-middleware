import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  res.send('Hello, World');
  // include dbConnection
  //const DB = require('./db');
  //const myDB = new DB();
  //myDB.readArticles();

  const Akeneo = require('./akeneo');
  const client = new Akeneo();
  client.authenticate();
  client.getData();
  //const token = require('./auth')
  //const dd = new token();
  //dd.token();
  //dd.getArticles();
};

