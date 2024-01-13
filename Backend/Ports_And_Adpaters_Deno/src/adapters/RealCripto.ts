import * as bcrypt from 'https://deno.land/x/bcrypt@v0.4.1/mod.ts'
import ProvedorCripto from '../core/usuario/model/ProvedorCripto.ts'

export default class RealCripto implements ProvedorCripto {

  criptografar(senha: string): Promise<string> {
      return bcrypt.hash(senha)
  }
  comparar(senha: any, senhaCripto: string) {
      return bcrypt.compare(senha, senhaCripto)
  }

}