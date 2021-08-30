import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = () => {
  // include dbConnection
  const connection = require('./dbConnection');
  // include stream module
  const stream = require('stream');
  // include akeneoConnection
  const akeneoConnection = require('./akeneoConnection');

  // if connection is successful
  connection.connect((err: {stack: string}) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  // select data from l24_master_data
  connection
    .query('SELECT * FROM l24_article_master limit 1')
    .stream()
    .pipe(
      stream
        .Transform({
          objectMode: true,
          transform: function (
            rows: any,
            _encoding: string,
            callback: () => void
          ) {
            rows.forEach((element: string) => {
              console.log(element);
            });

            callback();
          },
        })
        .on('finish', () => {
          console.log('done');
        })
    );

  //console.log(akeneoConnection);
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
