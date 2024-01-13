export default interface ProvedorCripto {
  criptografar (senha: string): Promise <string>
  comparar (senha, senhaCripto:string): Promise <boolean>
}