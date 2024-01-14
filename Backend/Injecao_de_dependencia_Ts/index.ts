//Conceitos de Injeção de dependência

import {ModuleManger }from "./moduleManger";

class Config {
  getConfig(){
    return {
      connect: true
    }
  }
}

class Database{
  
  constructor(private config : Config){}
  
  insert(){

    if(this.config.getConfig()){
      return {
        name:"José",
        email:"Jose@jose.com"
      }
    }
  }

}

class User {
  constructor(private database: Database) {}

    create() {
      return this.database.insert();
    }
}
// essa estrategia de usar o padrão singleton para gerencias a injeção de dependencia dinamicamente é muito boa

const moduleManger= new ModuleManger()
const database = moduleManger.addSingleton(Database, Config)
const user = moduleManger.addSingleton<User>(User, database)

console.log(user.create())
