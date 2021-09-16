import {Request, Response} from "express";

const Article = require('./db');
export class Articles {
    constructor() {
    }

    // Retrieve all Articles from the database.
    public findAll(req: Request, res: Response): void{
        Article.readArticles((err: any, data: string) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving articles."
                });
            else
                res.send(data);
        });
    }
}
