import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  // include dbConnection
  const mysqlConnection = require('./dbConnection');

  // include akeneoConnection
  require('./akeneoConnection');

  // select data from l24_pim_export
  mysqlConnection.query(
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
