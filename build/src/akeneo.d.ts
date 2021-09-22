export default class Akeneo {
    accessToken: string;
    private refreshToken;
    private expiresAt;
    constructor();
    authenticate(): Promise<any>;
    getProducts(): Promise<void>;
    importProducts(): Promise<void>;
}
