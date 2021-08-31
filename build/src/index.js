"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = () => {
    // include dbConnection
    const connection = require('./dbConnection');
    // include akeneoConnection
    const akeneoConnection = require('./akeneoConnection');
    // select data from l24_master_data and l24_pim_export
    connection.query('SELECT * FROM l24_article_master LIMIT 1; SELECT * FROM bmw_master_data LIMIT 1', (error, results /*,fields: string*/) => {
        if (error) {
            throw error;
        }
        results.forEach((rows) => {
            console.log(rows);
            console.log(akeneoConnection);
        });
        //fields.forEach(rows => console.log(rows));
    });
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map