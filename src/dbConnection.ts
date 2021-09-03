// include mysql module
import mysql = require('mysql');

// create a connection variable with the required details
const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root',
  password: 'Start2021',
  database: 'l24_master_data',
});

// if connection is successful
connection.connect((err: {stack: string}) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// select data from l24_pim_export
connection.query(
  'SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1',
  (error: string, results: string[] /*,fields: string*/) => {
    if (error) {
      throw error;
    }
    results.forEach((rows: string) => {
      console.log(rows);
    });
  }
);

module.exports = connection;
