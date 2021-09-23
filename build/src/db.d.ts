import mysql = require('mysql');
export default class DB {
    dbConnection: mysql.Connection;
    connected: boolean;
    constructor();
    /**
     * checks if the database connection is established.
     */
    dbConnect(): void;
    /**
     * reads articles from the view l24_pim_export
     */
    readArticles(): mysql.Connection;
}
