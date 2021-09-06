import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  // include dbConnection
  const DB = require('./dbConnection');
  const Akeneo = require('./akeneo');
  // include akeneoConnection
  //require('./authenticate');
  //require('./akeneoConnection');
  //const akeneo = require('./akeneo');
  const myDB = new DB();
  //myDB.connect();
  myDB.readData();
  const myAkeneo = new Akeneo();
  //myAkeneo.connect();
  myAkeneo.authenticate();
  // myAkeneo.get();
};
