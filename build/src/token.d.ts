declare const jwt: any;
declare const option: {
    client_id: string | undefined;
    username: string | undefined;
    password: string | undefined;
}[];
declare function authenticate(username: string, password: string): Promise<any>;
declare function getAll(): Promise<any[]>;
declare function omitPassword(option: any): any;
