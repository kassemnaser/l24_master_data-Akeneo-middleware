"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    res.send('Hello, World');
    // include dbConnection
    const DB = require('./db');
    const myDB = new DB();
    myDB.readArticles();
    const Akeneo = require('./akeneo');
    const client = new Akeneo();
    //client.authenticate().then((r: any) => r.getData());
    //client.getData();
    //const token = require('./auth')
    //const dd = new token();
    //dd.token();
    //dd.getArticles();
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map