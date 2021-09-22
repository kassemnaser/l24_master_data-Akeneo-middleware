"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const akeneo_1 = require("./akeneo");
const l24_master_dataFunc = async (req, res) => {
    // include dbConnection
    //const db = new DB();
    //db.readArticles();
    const client = new akeneo_1.default();
    res.send(await client.authenticate());
    //res.send(await client.getProducts());
    res.send(await client.importProducts());
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map