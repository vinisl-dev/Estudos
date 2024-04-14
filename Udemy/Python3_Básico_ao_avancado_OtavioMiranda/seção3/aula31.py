v1= 'a'
v2= 'a'
print(id(v1)) #identificador na memoria da variavel

print(id(v2))

carro={
    'cor':'vermelho',
    'velocidade':40
}

print(id(carro))

condicao = True  #flag
passou_no_if = None

if condicao:
    passou_no_if = True
    print('Faça algo')
else:
    print('Não passou no if')
    
if passou_no_if is None:
    print('não passou no if')
else:
    print('passou no if')