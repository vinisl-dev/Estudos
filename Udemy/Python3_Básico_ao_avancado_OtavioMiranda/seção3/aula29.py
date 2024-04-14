#try e except


numero = input('Vou dobrar o núme que vc digitrar: ')


try:
   
    numero_float = float(numero)
    print(f'O dobro de {numero_float} é {numero_float * 2 :.2f}')
    
except:
    print('Isso não é um número')




# if numero.isdigit():

#     numero_float = float(numero)
#     print(f'O dobro de {numero_float} é {numero_float * 2 :.2f}')
# else:
#     print('Isso não é um número')

