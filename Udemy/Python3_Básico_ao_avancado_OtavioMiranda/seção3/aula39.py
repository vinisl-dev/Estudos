"""
    Iterando strings com while
"""
    
nome = 'Luiz Otávio'
index = 0
result=[]
tamanho_nome = len(nome)
print(nome)
print(tamanho_nome)

def InsertStringSeparator(nome,separator):
    global index   #se não fizer isso não funciona porque o python cria uma nova variável com escopo local
    while index < tamanho_nome:
        nome[index]
        result.append(separator + nome[index])
        index+=1
        new_name = "".join(result)+separator
    return new_name

print(InsertStringSeparator(nome,"*"))

# solução professor
#novo_nome += letra mais facil e simples ;)

