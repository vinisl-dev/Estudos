class MinhaClasse:
    
    def __init__(self, att=''):
        self.meu_atributo = 'ola mundo'
        self.meu_atributo2 = att
        
    
    
    
    def meu_metodo(self) -> str:
        print('Estou no metodo!')
        print(self.meu_atributo2)
    
    def meu_metodo2(self, num, mult) -> int:
        return num * mult
    
    

objeto = MinhaClasse()
objeto.meu_metodo()

objeto2 = MinhaClasse('teste')
objeto2.meu_metodo()
result = objeto2.meu_metodo2(3,2)
print(result)







