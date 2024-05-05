
def diga_ola(name):
    
    return f'Olá {name}'

resultado =diga_ola('Vinicios')
print(resultado)


def soma(numero1, numero2):
    return numero1 + numero2

resultado=soma(1,2)
print(resultado)

#minha implementação
def media(lista_numeros):
    media_r=0
    
    for n in lista_numeros:
        media_r += n / len(lista_numeros)
    return media_r

print(media([5,3,1,2]))

#aula prof dunosauro
def mediaa(list_numeros):
   return sum(list_numeros) / len(list_numeros)

print(mediaa([1,2,3,4,5]))


def imprime_relatorio(nome, cpf, telefone):
    return f"""
    Relátorio parcial  
    
    {nome} portador do cpf {cpf}, que usa o número {telefone} 
    Está oficialmente de férias
    
    Ass. Direção
    
    """
    
print( imprime_relatorio('vini', cpf=12312312333, telefone='9999-999'))