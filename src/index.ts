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

  const http = require('http');

  const options = {
    hostname: '10.0.55.77',
    port: 8080,
    path: '/api/rest/v1/products',
    header: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ZWRiZTY0NzY4MmM1NzI2MmE4Yzc4M2NlZTc1M2I1MTBlYTQxNWVhZjdiMmNjOGI3YjczMmYwYjZkMzJiMDZiZA',
    },
    method: 'GET',
  };

  const req = http.request(
    options,
    (res: {
      statusCode: string;
      on: (arg0: string, arg1: (d: string) => void) => void;
    }) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (d: string) => {
        //const product = Object.entries(JSON.parse(d));
        //console.info(product);
        process.stdout.write(d);
      });
    }
  );

  req.on('error', (error: string) => {
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
