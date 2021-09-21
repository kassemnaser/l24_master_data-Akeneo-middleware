export default class DB {
    dbConnection: any;
    connected: boolean;
    constructor();
    dbConnect(): void;
    readArticles(): any;
}
