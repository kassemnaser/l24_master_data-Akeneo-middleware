export default class Akeneo {
    accessToken: string;
    constructor();
    authenticate(): Promise<any>;
    importProducts(): Promise<void>;
}
