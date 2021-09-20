"use strict";
module.exports = (app) => {
    const articles = require('./articles');
    app.get("/customers", articles.findAll);
};
//# sourceMappingURL=articleRouter.js.map