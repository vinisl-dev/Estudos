# girls = ['rachel', 'monica','anabele','sofia']

# def hi(name):
#     print("olá " + name)

# for name in girls:
#     hi(name)
#     print('proxima')

# for i in range(1,6):
#     print(i)



A = ['junior', 'junior', 'alice', 'cecilia', 'junior', 'carlos', 'carlos', 'alice']

def conta_elemento_lista(lista_A):
    lista = lista_A

    for i, name in enumerate(lista):
        resume_list=[]
        count=0
        maxi = lista.count(name)
        print("index: $ nome: $ ",i, name)

        if(name == len(lista)+1):
           
           count = count+1
    print(count)
    return lista[maxi]
print(conta_elemento_lista(A))
    

