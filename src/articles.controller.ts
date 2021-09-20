import {Request, Response} from "express";

const Article = require('./db');
export class ArticlesController {
    constructor() {
    }

    // Retrieve all ArticlesController from database.
    public findAll(req: Request, res: Response){
        Article.getAll((err: any, data: string) => {
            if (err)
                res.status(500).send({message: err.message || 'Some error occurred while retrieving articles.'});
            else
                res.send(data);
        });
    }
}
