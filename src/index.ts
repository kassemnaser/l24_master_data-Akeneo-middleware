import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = () => {
  // include mysql module
  const mysql = require('mysql');
  // include stream module
  const stream = require('stream');

  // create a connection variable with the required details
  const connection = mysql.createConnection({
    host: '172.17.0.3',
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

  const https = require('http');

  const data = JSON.stringify({
    todo: 'buy the article',
  });
  const options = {
    hostname: '10.0.55.77',
    port: 8080,
    path: '/api/rest/v1/products',
    header: {
      'Content-Type': 'applications/json',
      'Authorization': 'Bearer NzI2MTFlYmVkZGZhNzNhNDE5YTUwMmQxZTI2MDExZjgyZGFiOGYxYjQ3ZTdiY2VjOGZmOWJkYTFmMWY1OTMyZA',
      'Content-Length': data.length,
    },
    method: 'GET',
  };

  const req = https.request(
    options,
    (res: {
      statusCode: any;
      on: (arg0: string, arg1: (d: any) => void) => void;
    }) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (d: string) => {
        process.stdout.write(d);
      });
    }
  );

  req.on('error', (error: any) => {
    console.error(error);
  });

  req.end();
};

/*
I will need this later


const Article = function (this: any, article: any) {
  this.article_number = article.article_number;
  this.brand_id = article.brand_id;
};

Article.findById = (
  articleId: any,
  result: (arg0: {kind: string} | null, arg1: null) => void
) => {
  connection.query(
    `SELECT * FROM l24_article_master WHERE id = ${articleId}`,
    (err: any, res: string | any[]) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found article: ', res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({kind: 'not_found'}, null);
    }
  );
};
*/
