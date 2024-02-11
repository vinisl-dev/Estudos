export default interface TransactionDAO {
  getTransactions (cardNumber: string, mouth: number, year: number): Promise<any>
}


