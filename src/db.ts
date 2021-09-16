import mysql = require('mysql');
import {Response} from "express";
require('dotenv').config();

export default class DB {

  dbConnection: any;
  // create a connection variable with the required details
  constructor() {
    this.dbConnection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    this.dbConnect();
  }

  public dbConnect(): string{
    // if database connection is successful
    return this.dbConnection.connect((err: Error) => {
      if (err) {
        console.log('Connection failed!!! Error: ');
        throw err;
      } else console.log('Database connection established.');
    });
  }

  // select articles from l24_pim_export.
  public readArticles(): string {
    let sqlQuery: string = 'SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1';
    this.dbConnection.query(sqlQuery, (err: Error, results: string[]) => {
        if (err) {
          throw err;
        } else {
          console.log('Selected ' + results.length + ' row(s).');
          for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
          }
          console.log('Done.');
        }
      }
    );
    this.dbConnection.end((err: Error) => {
      if (err) {
        throw err;
      } else {
        console.log('Closing connection.');
      }
    });

    return this.dbConnection;
  }

}
