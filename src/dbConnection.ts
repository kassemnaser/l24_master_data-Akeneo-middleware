// include mysql module
const mysql = require('mysql');

// create a connection variable with the required details
const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root',
  password: 'Start2021',
  database: 'l24_master_data',
});

module.exports = connection;
