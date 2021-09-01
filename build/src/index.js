"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    // include dbConnection
    const mysqlConnection = require('./dbConnection');
    // include akeneoConnection
    const akeneoConnection = require('./akeneoConnection');
    // select data from l24_pim_export
    mysqlConnection.query('SELECT * FROM l24_pim_export LIMIT 1', (error, results /*,fields: string*/) => {
        if (error) {
            throw error;
        }
        results.forEach((rows) => {
            console.log(rows);
            //console.log(akeneoConnection);
            //akeneoConnection.send(rows);
        });
        //fields.forEach(rows => console.log(rows));
    });
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map