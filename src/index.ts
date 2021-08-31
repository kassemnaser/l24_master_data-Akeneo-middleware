import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = () => {
  // include dbConnection
  const connection = require('./dbConnection');

  // include akeneoConnection
  const akeneoConnection = require('./akeneoConnection');

  // select data from l24_master_data and l24_pim_export
  connection.query(
    'SELECT * FROM l24_article_master LIMIT 1; SELECT * FROM bmw_master_data LIMIT 1',
    (error: string, results: string[] /*,fields: string*/) => {
      if (error) {
        throw error;
      }
      results.forEach((rows: string) => {
        console.log(rows);
        console.log(akeneoConnection);
      });
      //fields.forEach(rows => console.log(rows));
    }
  );
};
