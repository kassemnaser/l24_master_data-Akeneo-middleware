const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');
class DB {
  dbConnection: any;
  // create a connection variable with the required details
  constructor() {
    this.dbConnection = mysql.createConnection({
      host: dbConfig.HOST,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DATABASE,
    });
  }

  // if the connection is successful
  public dbConnect() {
    this.dbConnection.connect((err: Error) => {
      if (err) {
        console.log('Connection failed!!! Error:');
        throw err;
      } else {
        console.log('Database connection established.');
      }
    });
  }

  // select data from l24_pim_export
  readArticles() {
    this.dbConnection.query(
      'SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1',
      (err: Error, results: string[]) => {
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
  }
}

module.exports = DB;
