import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
export declare const l24_master_dataFunc: HttpFunction;
/**
import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const helloWorld: HttpFunction = (req, res) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'Start2021',
    database: 'l24_master_data',
  });

  connection.connect((err: {stack: string}) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  connection.query(
    'SELECT * FROM l24_article_master LIMIT 1;',
    (error: any, results: any, fields: any) => {
      if (error) throw error;
      console.log(results);
    }
  );
  connection.end();
};

 */
