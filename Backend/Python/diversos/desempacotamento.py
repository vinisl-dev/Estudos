#%%
numeros = [0,1,2,3,4,5,6,7,8,9]
#%%
x, y , *rest = numeros
print (x)
# %%
*res, x, y = numeros
print(*res, x, y)
# %%
x, *res, y = numeros
print(*res)
# %%
def maior(num1, num2):
    if num1 > num2:
        return num1
    return num2

# %%
numeros = [4,5]
maior_numero = maior(numeros[0], numeros[1])
print (maior_numero)

# %%
maior_numero=maior(*numeros)
print(maior_numero)
# %%

def escreve_mensagem(mensagem='',nome=''):
    print(f'{mensagem}, {nome}')
    
mensagem = {'mensagem':'Bem-vindo', 'nome':'Yuri'}
# usa-se dois * para dicionarios
escreve_mensagem(**mensagem)
#%%
# operador _ ignora um valor de uma lista/dicionario
numeros =[1,2,3,4,5]
x, _, *rest = numeros
print(x, rest)

# operador *_ ignora todo o restante

x, y, *_ = numeros

print( x,y)

