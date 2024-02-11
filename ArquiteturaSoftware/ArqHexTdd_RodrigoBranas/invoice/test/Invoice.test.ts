import Invoice from "../src/Invoice"


test("Deve criar uma fatura", function(){
const transactions=[
  {amount:100, currency:"BRL"},
  {amount:1000, currency:"BRL"},
  {amount:50, currency:"USD"},
]

const currency = {
  usd:3
}
const invoice = new Invoice(transactions,currency)
const total = invoice.getTotal()
expect(total).toBe(1250)
})