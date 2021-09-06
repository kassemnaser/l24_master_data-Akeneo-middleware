"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    // include dbConnection
    const DB = require('./dbConnection');
    const Akeneo = require('./akeneo');
    // include akeneoConnection
    //require('./authenticate');
    //require('./akeneoConnection');
    //const akeneo = require('./akeneo');
    const myDB = new DB();
    //myDB.connect();
    myDB.readData();
    const myAkeneo = new Akeneo();
    //myAkeneo.connect();
    myAkeneo.authenticate();
    // myAkeneo.get();
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map