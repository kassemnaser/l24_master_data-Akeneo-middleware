"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
require('dotenv').config();
class DB {
    // create a connection variable with the required details
    constructor() {
        this.connected = false;
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
    dbConnect() {
        this.dbConnection.connect((err) => {
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
    readArticles() {
        const sqlQuery = 'SELECT * FROM l24_pim_export WHERE brand = "SNX" limit 1';
        this.dbConnection.query(sqlQuery, (err, results) => {
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
        this.dbConnection.end((error) => {
            if (error) {
                throw error;
            }
            else {
                console.log('Closing connection.');
            }
        });
        return this.dbConnection;
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map