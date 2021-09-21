"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.l24_master_dataFunc = void 0;
const akeneo_1 = require("./akeneo");
const l24_master_dataFunc = async (req, res) => {
    // include dbConnection
    //const db = new DB();
    //db.readArticles();
    /*
    const app = express();
    const articles = require('./article.router');
    app.use('/articles', articles.findAll)
    app.post('/', (req: Request, res: Response) => {
      res.send({ message: "Welcome to my middleware." });
    });
    */
    const client = new akeneo_1.default();
    res.send(await client.authenticate());
    res.send(await client.getProducts());
    res.send(await client.importProducts());
};
exports.l24_master_dataFunc = l24_master_dataFunc;
//# sourceMappingURL=index.js.map