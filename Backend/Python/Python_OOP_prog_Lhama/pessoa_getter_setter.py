class Pessoa:           #substantivo
    
    def __init__(self, name:str, idade:int) -> None:
        self.name = name                     #substativos
        self.idade = idade
        
    def dirigir(self, veiculo:str) -> None:     #verbos
        print('Dirigindo um(a){}'.format(veiculo))
        
    def cantar(self) -> None:
        print('Lalalalala')
    
    def apresentar_idade(self) -> None:
        return self.idade

