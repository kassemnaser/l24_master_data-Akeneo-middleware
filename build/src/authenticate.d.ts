declare const request: any;
declare const options: {
    method: string;
    url: string;
    headers: {
        'Content-Type': string;
        Authorization: string;
    };
    form: {
        grant_type: string | undefined;
        username: string | undefined;
        password: string | undefined;
    };
};
declare function generateAccessToken(): void;
declare const accessToke: void;
