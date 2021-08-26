import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = () => {
  // include mysql module
  const mysql = require('mysql');
  // include stream module
  const stream = require('stream');

  // create a connection variable with the required details
  const connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'Start2021',
    database: 'l24_master_data',
  });

  // make to connection to the database
  connection.connect((err: {stack: string}) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  // if connection is successful
  connection
    .query('SELECT * FROM l24_article_master limit 1')
    .stream()
    .pipe(
      stream
        .Transform({
          objectMode: true,
          transform: function (rows: any, encoding: any, callback: () => void) {
            console.log(rows);

            callback();
          },
        })
        .on('finish', () => {
          console.log('done');
        })
    );
};
