numero = input("digite um numero inteiro ")

if numero.isdigit():
    numero =int(numero)

    if numero % 2 == 0:
    
        print(f'O numero: {numero} é par')
    else:
        print(f'O numero: {numero} é impar')
else: print("numero invalido")