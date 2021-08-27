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

  // connection to Akeneo REST API
  const http = require('http');

  const options = {
    host: '10.0.55.77',
    port: 8080,
    path: 'http://10.0.55.77:8080/api/rest/v1/products',
    content_type: 'applications/json',
    authorization:
      'Bearer N2RhMzRmNDlkY2JhN2E5MDY5OGNiMTE2MDYxMDU5ZjAwZjM5ZGFmNmRlYzI1YTM0MDllNjAwNGUxMWIzZmRkNw',
  };

  http
    .get(
      options,
      (res: {statusCode: string; headers: {[x: string]: string}}) => {
        console.log('Got response: ' + res.statusCode);

        for (const item in res.headers) {
          console.log(item + ': ' + res.headers[item]);
        }
      }
    )
    .on('error', (e: {message: string}) => {
      console.log('Got error: ' + e.message);
    });
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
