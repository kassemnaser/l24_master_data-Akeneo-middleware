import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import Akeneo from './akeneo';
import DB from './db';
import {Request, Response} from 'express';

export const l24_master_dataFunc: HttpFunction = async (
  req: Request,
  res: Response
) => {
  // include dbConnection
  const db = new DB();
  db.readArticles();
  /*
  const app = express();
  const articles = require('./article.router');
  app.use('/articles', articles.findAll)
  app.post('/', (req: Request, res: Response) => {
    res.send({ message: "Welcome to my middleware." });
  });
  */

  const client = new Akeneo();
  res.send(await client.authenticate());
  res.send(await client.getProducts());
  res.send(await client.importProducts());
};
