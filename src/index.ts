import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  // include dbConnection
  require('./dbConnection');

  // include akeneoConnection
  //require('./authenticate');
  //require('./akeneoConnection');
  //const akeneo = require('./akeneo');
};
