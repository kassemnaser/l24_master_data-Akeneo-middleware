export default class Akeneo {
    accessToken: string;
    private refreshToken;
    private expiresAt;
    constructor();
    /**
     * authenticates to the Akeneo PIM.
     * */
    authenticate(): Promise<any>;
    /**
     * get products form Akeneo.
     * */
    getProducts(): Promise<void>;
    /**
     * imports products into Akeneo.
     * */
    importProducts(): Promise<void>;
    createProduct(): Promise<void>;
    updateProducts(): Promise<void>;
}
