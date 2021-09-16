export default class Akeneo {
    private expiresAt;
    accessToken: string;
    private refreshToken;
    constructor();
    authenticate(): Promise<any>;
    getProducts(): Promise<void>;
    importProducts(): Promise<void>;
}
