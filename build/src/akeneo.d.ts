declare const request: any;
declare class Akeneo {
    expiresAt: number;
    accessToken: string;
    constructor(expiresAt: number);
    connect(): Promise<void>;
    authenticate(): Promise<void>;
}
