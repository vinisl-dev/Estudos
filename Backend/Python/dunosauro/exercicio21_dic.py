def eleva_numero(lista_numeros, num=1):
    lista_resp = []
    for numero in lista_numeros:
       lista_resp.append(numero **num)
    return lista_resp
  


lista_valores= [1,2,3,4,54,7,8,9,9,1]

dicionario = {
    'lista padrao':eleva_numero(lista_valores),
    'lista quadrada': eleva_numero(lista_valores,2),
    'lista cubica': eleva_numero(lista_valores,3)
}

print(lista_valores)
print(dicionario)
