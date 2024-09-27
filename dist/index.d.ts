import { GetAccountResponse, GetItemsResponse, GetPricesResponse } from './types';
export default class HexaWebApi {
    private readonly hexa;
    constructor(key: string);
    protected prices(appId: number): Promise<GetPricesResponse>;
    protected items(appId: number): Promise<GetItemsResponse>;
    protected account(): Promise<GetAccountResponse>;
}
