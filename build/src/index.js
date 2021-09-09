"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    res.send('Hello, World');
    // include dbConnection
    //const DB = require('./dbConnection');
    //const myDB = new DB();
    //myDB.readData();
    const Akeneo = require('./akeneo');
    const client = new Akeneo();
    client.getData();
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map