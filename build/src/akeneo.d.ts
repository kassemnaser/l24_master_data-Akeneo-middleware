declare const http: any;
declare const options: {
    method: string;
    host: string | undefined;
    port: number;
    path: string;
    headers: {
        Authorization: string;
        'Content-Type': string;
        Cookie: string;
    };
    form: {
        grant_type: string | undefined;
        username: string | undefined;
        password: string | undefined;
    };
};
