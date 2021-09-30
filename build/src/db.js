"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
require('dotenv').config();
class DB {
    // create a connection variable with the required details
    constructor() {
        this.connected = false;
        this.sku = '';
        this.dbConnection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        this.dbConnect();
    }
    /**
     * checks if the database connection is established.
     */
    dbConnect() {
        this.dbConnection.connect((error) => {
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
    readArticles() {
        const sqlQuery = 'SELECT `l24-sku` FROM l24_pim_export limit 1';
        this.dbConnection.query(sqlQuery, (error, results) => {
            if (error) {
                throw error;
            }
            else {
                for (let i = 0; i < results.length; i++) {
                    this.sku = JSON.stringify(results[i]);
                }
            }
        });
        return this.sku;
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map