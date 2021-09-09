import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  res.send('Hello, World');
  // include dbConnection
  //const DB = require('./dbConnection');
  //const myDB = new DB();
  //myDB.readData();

  const Akeneo = require('./akeneo');
  const client = new Akeneo();
  //client.getData();
};
