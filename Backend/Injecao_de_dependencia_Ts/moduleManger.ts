export class ModuleManger {

  addSingleton<T>(singleton: any, ...dependencies: any):T {
    const dependenciesIntances = dependencies.map((dependency: any) =>{
      //Valida o tipo o parametro, se form uma função ele tenta criar uma instancia do que foi passado como dependencia
      if (typeof dependency === "function"){
        return new dependency();
      }
      return dependency
    })
    return new singleton(...dependenciesIntances)
  }
}