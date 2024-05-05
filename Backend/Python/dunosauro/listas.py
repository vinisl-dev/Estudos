minha_lista_de_compras = []

# for coisa in minha_lista_de_compras:
#     print(coisa)
    
resposta = ''
    
while resposta != 'acabou':
    resposta = input('O que temos que comprar? ')
    minha_lista_de_compras.append(resposta)

print(minha_lista_de_compras)


#SLICE

n = [0,1,2,3,4,5,6,7,8,9]

print(n[0])

print(n[6:])

print(n[:-6])

print(n[::2])

print(n[:0])

#metodos de listas

print(n.append(4))
print(n.insert(2,3))
print(n.count(2))
print(n.remove(1))
print(n.pop())
print(n.reverse())
print(n)
