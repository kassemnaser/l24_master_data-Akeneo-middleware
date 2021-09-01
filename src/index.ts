import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (res, req) => {
  // include dbConnection
  const connection = require('./dbConnection');

  // include akeneoConnection
  const akeneoConnection = require('./akeneoConnection');

  // select data from l24_pim_export
  connection.query(
    'SELECT * FROM l24_pim_export LIMIT 1',
    (error: string, results: string[] /*,fields: string*/) => {
      if (error) {
        throw error;
      }
      results.forEach((rows: string) => {
        console.log(rows);
        //console.log(akeneoConnection);
        //akeneoConnection.send(rows);
      });
      //fields.forEach(rows => console.log(rows));
    }
  );
};
