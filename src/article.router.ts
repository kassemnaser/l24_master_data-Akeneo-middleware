module.exports = (app: any) => {
    const articles = require('./articles.controller');
    app.get("/articles", articles.findAll);
}
