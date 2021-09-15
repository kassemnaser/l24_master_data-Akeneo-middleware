"use strict";
// Retrieve all articles from the database.
const Articles = require('./db');
exports.findAll = (req, res) => {
    Articles.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else
            res.send(data);
    });
};
//# sourceMappingURL=retrieveAllArticles.js.map