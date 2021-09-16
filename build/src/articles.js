"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articles = void 0;
const Article = require('./db');
class Articles {
    constructor() {
    }
    // Retrieve all Articles from the database.
    findAll(req, res) {
        Article.readArticles((err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving articles."
                });
            else
                res.send(data);
        });
    }
}
exports.Articles = Articles;
//# sourceMappingURL=articles.js.map