
def imprime_relatorio(pessoa):
    return f"""
    Relátorio parcial  
    
    {pessoa['nome']} portador do cpf {pessoa['cpf']}, que usa o número {pessoa['telefones']} 
    Está oficialmente de férias
    
    Ass. Direção
    
    """
    
pessoa = {
    'nome':'Eduardo',
    'idade':27,
    'cpf':12355254345,
    'telefones':{
        'residencial':456789,
        'celular':34567890,
        'comercial':3456787,
    }
}

print(imprime_relatorio(pessoa))