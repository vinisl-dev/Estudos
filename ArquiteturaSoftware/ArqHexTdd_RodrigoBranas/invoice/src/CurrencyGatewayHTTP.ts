
import CurrencyGateway from "./CurrencyGateway"
import HttpClient from "./HttpClient"

export default class CurrencyGatewayHTTP implements CurrencyGateway{
  
  constructor(readonly httpClient: HttpClient,readonly baseURL:string){
    baseURL="http://localhost:3001"
  }

  async getCurrencies (): Promise<any>{
   const currencies = await this.httpClient.get(`${this.baseURL}/currencies`)
   return currencies

  }

}