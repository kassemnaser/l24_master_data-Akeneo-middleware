"use strict";
const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');
class DB {
    // create a connection variable with the required details
    constructor() {
        this.conn = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DATABASE,
        });
    }
    // if the connection is successful
    connect() {
        this.conn.connect((err) => {
            if (err) {
                console.log('Connection failed!!! Error:');
                throw err;
            }
            else {
                console.log('Database connection established.');
            }
        });
    }
    // select data from l24_pim_export
    readData() {
        this.conn.query('SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1', (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log('Selected ' + results.length + ' row(s).');
                for (let i = 0; i < results.length; i++) {
                    console.log(results[i]);
                }
                console.log('Done.');
            }
        });
        this.conn.end((err) => {
            if (err) {
                throw err;
            }
            else {
                console.log('Closing connection.');
            }
        });
    }
}
module.exports = DB;
//# sourceMappingURL=dbConnection.js.map