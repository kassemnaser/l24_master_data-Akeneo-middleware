import mysql = require('mysql');
require('dotenv').config();

export default class DB {
  dbConnection: any;
  connected: boolean = false;
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

  /*
   * looks if the database connection is established.
   * */
  public dbConnect() {
    this.dbConnection.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }
      this.connected = true;
      console.log('MySQL Connection established!');
    });
  }

  /*
   * Read articles from the view l24_pim_export
   */
  public readArticles() {
    const sqlQuery = 'SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1';
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
    });

    this.dbConnection.end((error: Error) => {
      if (error) {
        throw error;
      } else {
        console.log('Closing connection.');
      }
    });

    return this.dbConnection;
  }
}
