import pgp from "pg-promise"
import Connection from "./Connection"

export default class PgPromiseAdapter implements Connection{
  connection: any

  constructor(){
    this.connection = pgp()("postgres://postgres:postgres@127.0.0.1:5433/postgres")
  }

  async query(statement: string, params: any): Promise<any> {
    return await this.connection.query(statement, params)

  }
 async  close(): Promise<any> {
    return await this.connection.$pool.end()
  }


}