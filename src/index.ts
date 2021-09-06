import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  // include dbConnection
  const DB = require('./dbConnection');
  const myDB = new DB();
  myDB.readData();

  const Akeneo = require('./akeneo');
  const client2 = new Akeneo();
  client2.authenticate();

  const AkeneoConnection = require('./akeneoConnection');
  const client = new AkeneoConnection();
  client.postData();
};
