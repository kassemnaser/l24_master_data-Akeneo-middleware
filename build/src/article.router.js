"use strict";
module.exports = (app) => {
    const articles = require('./articles.controller');
    app.get("/articles", articles.findAll);
};
//# sourceMappingURL=article.router.js.map