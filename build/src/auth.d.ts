declare var axios: any;
declare var qs: any;
declare class Auth {
    private expiresAt;
    private accessToken;
    private refreshToken;
    constructor(expiresAt: number, accessToken: string, refreshToken: string);
    token(): any;
    getArticles(): void;
}
