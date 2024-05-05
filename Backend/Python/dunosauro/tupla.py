
minha_tupla =('Eduardo', 27, '9757646353', 'rua castelo 0',0)
nome, idade, *coisas_que_nao_quero= minha_tupla 

print(coisas_que_nao_quero)

print(nome, idade)

nome, idade = idade, nome
print(nome, idade)


def minha_func():
    return 1,2,3

print(minha_func())
print(minha_func()[2])

