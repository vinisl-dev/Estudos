#Conjuntos
# Ual parece que se comporta como uma stack
# são como set do js, não aceita valores repetidos
# python tambem tem set :)

A = {'Vinicios','Eduardo', 'Eduardo','Eduardo'}
print(A)

lista=[1,2,3,4,55,3562,21,3,34543,2,2,1,2,33,4,3,56,7,45,567,3,5,67]
print(lista)
print(set(lista))
print(tuple(lista))

print(A.union({'Outra Pessoa'}))

print(A.intersection({'Vinicios'}))

print(A.difference({'Vinicios'}))
