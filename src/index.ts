import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  // include dbConnection
  const mysqlConnection = require('./dbConnection');

  // include akeneoConnection
  require('./akeneo');

  // select data from l24_pim_export
  mysqlConnection.query(
    'SELECT * FROM l24_pim_export WHERE l24_sku = "BSH-0 001 106 027"',
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
