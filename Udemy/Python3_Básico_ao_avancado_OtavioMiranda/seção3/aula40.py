#calculadora com while

option = 's'
result=0
while option == 's':
    number1 = float(input('digite o primeiro numero'))
    number2 = float(input('digite o segundo numero'))
    operator = input('escolha a operação +|-|*|/')
    
    if operator == '+':
        result = number1 + number2
    if operator == '-':
        result = number1 - number2
    if operator == '*':
        result = number1 * number2
    if operator == '/':
        result = number1 / number2
    print(result)
    option = input('deseja continuar "s"').lower()