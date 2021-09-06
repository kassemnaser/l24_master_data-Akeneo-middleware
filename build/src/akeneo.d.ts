declare const request: any;
declare class Akeneo {
    expiresAt: number;
    constructor(expiresAt: number);
    connect(): Promise<void>;
    authenticate(): Promise<void>;
}
