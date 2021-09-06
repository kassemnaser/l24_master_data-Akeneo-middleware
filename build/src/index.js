"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    // include dbConnection
    const DB = require('./dbConnection');
    const myDB = new DB();
    myDB.readData();
    const Akeneo = require('./akeneo');
    const client2 = new Akeneo();
    client2.authenticate();
    const AkeneoConnection = require('./akeneoConnection');
    const client = new AkeneoConnection();
    client.postData();
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map