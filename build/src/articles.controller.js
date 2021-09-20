"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const Article = require('./db');
class ArticlesController {
    constructor() {
    }
    // Retrieve all ArticlesController from database.
    findAll(req, res) {
        Article.getAll((err, data) => {
            if (err)
                res.status(500).send({ message: err.message || 'Some error occurred while retrieving articles.' });
            else
                res.send(data);
        });
    }
}
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map