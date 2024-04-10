#encapsulamento de metodos de classe

class Calculadora:
    
    def calcular(self, op, num1, num2):
        if op == '+':
           return self.__adicionar(num1, num2)
            
        elif op == '-':
           return self.__subtrair(num1, num2)
    
        else:
            print ('Operacao Inválida')
        
    def __adicionar(self,num1, num2):
        return num1 + num2

    def __subtrair(self, num1, num2):
        return num1 - num2
    
    
calc = Calculadora()
print(calc.calcular('+',1,2))
print(calc.calcular('-',2,3))
print(calc.calcular('',2,3))