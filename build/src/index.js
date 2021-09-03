"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const l24_master_dataFunc = (req, res) => {
    // include dbConnection
    require('./dbConnection');
    // include akeneoConnection
    require('./authenticate');
    require('./akeneoConnection');
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map