declare const mysql: any;
declare const dbConfig: any;
declare class DB {
    conn: any;
    constructor();
    connect(): void;
    readData(): void;
}
