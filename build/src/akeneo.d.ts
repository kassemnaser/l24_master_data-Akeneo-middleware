declare const http: any;
declare const options: {
    method: string;
    url: string;
    headers: {
        Authorization: string;
        'Content-Type': string;
        Cookie: string;
    };
    form: {
        grant_type: string | undefined;
        username: string;
        password: string;
    };
};
declare const req: any;
