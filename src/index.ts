import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import Akeneo from './akeneo';
import DB from './db';
import {Request, Response} from 'express';

export const l24_master_dataFunc: HttpFunction = async (req: Request, res: Response) => {
  // include dbConnection
  //const db = new DB();
  //db.readArticles();


  const client = new Akeneo();
  res.send(await client.authenticate());
  //res.send(await client.getProducts());
  res.send(await client.importProducts());
};
