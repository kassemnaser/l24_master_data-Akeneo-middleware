import DB from './db';
export default class Akeneo {
    accessToken: string;
    private refreshToken;
    private expiresAt;
    myDb: DB;
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
     * creates a new product in Akeneo
     * */
    createProduct(): Promise<void>;
    /**
     * updates the products in Akeneo.
     * */
    updateProduct(): Promise<void>;
    /**
     * deactivates the products in Akeneo.
     * */
    deactivateProduct(): Promise<void>;
}
