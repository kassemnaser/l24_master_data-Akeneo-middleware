"use strict";
// include mysql module
const mysql = require('mysql');
// create a connection variable with the required details
const connection = mysql.createConnection({
    multipleStatements: true,
    host: '172.17.0.3',
    user: 'root',
    password: 'Start2021',
    database: 'l24_master_data',
});
// if connection is successful
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;
//# sourceMappingURL=dbConnection.js.map