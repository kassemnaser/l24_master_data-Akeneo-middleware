declare const mysql: any;
declare class DB {
    conn: any;
    constructor();
    connect(): void;
    readData(): void;
}
