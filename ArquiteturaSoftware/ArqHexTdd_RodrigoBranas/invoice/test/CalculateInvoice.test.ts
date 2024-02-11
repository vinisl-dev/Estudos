import axios from "axios"
import CalculateInvoice from "../src/CalculateInvoice"
import CurrencyGateway from "../src/CurrencyGateway";

import PgPromiseAdapter from "../src/PgPromiseAdapter";
import Clock from "../src/Clock"
import TransactionDAO from "../src/TransactionDAO";

const clock:Clock ={
  getToday():Date{
    return new Date("2024-02-11T10:00:00")
  }
}

 test("Deve calcular a fatura", async function(){
  let transactionDAO: TransactionDAO = {
    async getTransactions (cardNumber: string, mouth: number, year: number): Promise<any> {
      return[
        {amount:100, currency:"BRL"},
        {amount:1000, currency:"BRL"},
        {amount:600, currency:"USD"}
      ]
    }
  }
  let currencyGateway:CurrencyGateway ={
    async getCurrencies(){
      return {
        usd:2
      }
    }
  }

  let calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway, clock);
  let output = await calculateInvoice.execute("1234")
  expect(output.total).toBe(2300)
})

