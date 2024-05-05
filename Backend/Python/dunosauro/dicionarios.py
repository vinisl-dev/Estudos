dicinario = {
    'chave':'valor',
    'multival':[1,2,'3']
}

print(dicinario['chave'])
print(dicinario['multival'])
print(dicinario['multival'][2])
print(dicinario['chave'][0])

pessoa = {
    'nome':'Eduardo',
    'idade':27,
    'telefones':{
        'residencial':456789,
        'celular':34567890,
        'comercial':3456787,
    }
}

print(pessoa)
print(pessoa.keys())