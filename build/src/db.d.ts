import mysql = require('mysql');
export default class DB {
    dbConnection: mysql.Connection;
    connected: boolean;
    constructor();
    dbConnect(): void;
    readArticles(): mysql.Connection;
}
