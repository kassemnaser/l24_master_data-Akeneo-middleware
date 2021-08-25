import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  const mysql = require('mysql');
  const stream = require('stream');

  const connection = mysql.createConnection({
    host: '172.17.0.3',
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

  connection
    .query('SELECT * FROM l24_article_master limit 500')
    .stream()
    .pipe(
      stream
        .Transform({
          objectMode: true,
          transform: function (data: any, encoding: any, callback: () => void) {
            // do something with data...
            console.log(data);
            callback();
          },
        })
        .on('finish', () => {
          console.log('done');
        })
    );
};

// SELECT * FROM l24_article_master LIMIT 1

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
