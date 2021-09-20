"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const akeneo_1 = require("./akeneo");
const l24_master_dataFunc = async (req, res) => {
    res.send('Hello, World');
    // include dbConnection
    //const articles = new DB();
    //articles.readArticles();
    const express = require("express");
    const app = express();
    const articles = require('./article.router');
    app.use('/articles', articles.findAll);
    app.post('/', (req, res) => {
        res.send({ message: "Welcome to my middleware." });
    });
    const client = new akeneo_1.default();
    await client.authenticate();
    await client.getProducts();
    //await client.importProducts();
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map