import mysql = require('mysql');
require('dotenv').config();

export default class DB {
  dbConnection: mysql.Connection;
  connected = false;
  public sku = '';

  // create a connection variable with the required details
  constructor() {
    this.dbConnection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    this.dbConnect();
    this.readArticles();
  }

  /**
   * checks if the database connection is established.
   */
  public dbConnect() {
    this.dbConnection.connect((error: mysql.MysqlError) => {
      if (error) {
        console.log(error.message);
        return;
      }
      this.connected = true;
      console.log('Connection to l24_pim_export established!');
    });
  }

  /**
   * reads articles from the view l24_pim_export
   */
  public readArticles() {
    const sqlQuery = 'SELECT `l24-sku` FROM l24_pim_export limit 5';
    this.dbConnection.query(sqlQuery, (error: Error, results: string[]) => {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < results.length; i++) {
          this.sku = JSON.stringify(results[i]);
        }
      }
    });
    return this.sku;
  }

  /*
  public readArticles(sqlQuery: string, callback: Function){
    this.dbConnection.query(sqlQuery, (error: Error, results: object[], fields: []) => {
      if (error) {
        callback(error);
      }
      else if (results.length === 0) {
        callback('There is no record');
      }
      else {
        callback(null, results);
      }
    })
  }
 */
}
