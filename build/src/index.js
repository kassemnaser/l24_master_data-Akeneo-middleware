"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const db_1 = require("./db");
const l24_master_dataFunc = async (req, res) => {
    // include dbConnection
    const db = new db_1.default();
    db.readArticles();
    //const client = new Akeneo();
    //res.send(await client.authenticate());
    //res.send(await client.getProducts());
    //res.send(await client.importProducts());
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map