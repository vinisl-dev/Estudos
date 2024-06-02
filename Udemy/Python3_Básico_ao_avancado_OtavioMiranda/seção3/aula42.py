frase = ''' O Python é uma linguagem de programação 
    multiparadigma.'
    Python foi criado por Guido van Rossum.'''    
        
# print(frase.count('Python'))

i = 0
qtd_apareceu_mais_vezes = 0
letra_apareceu_mais_vezes = ''

while i < len(frase):
    letra_atual = frase[i]
    
    if letra_atual == ' ':
        i += 1
        continue
    
    qtd_apareceu_mais_vezes_atual = frase.count(letra_atual)
    
    if qtd_apareceu_mais_vezes < qtd_apareceu_mais_vezes_atual:
        qtd_apareceu_mais_vezes = qtd_apareceu_mais_vezes_atual
        letra_que_apareceu_mais_vezes = letra_atual
    i += 1
    
print( letra_que_apareceu_mais_vezes , qtd_apareceu_mais_vezes)