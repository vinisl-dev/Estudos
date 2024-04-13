nome = input('Digite seu nome: ')
idade = input('digite sua idade: ')

if  nome and idade:
    print(f'seu nome é: ',nome)
    reverse_nome= nome[::-1]
    print(f'Seu nome invertido é: ', reverse_nome)
    name_spaces = nome.__contains__(" ")
    print ('Seu nome contem espaço ',"sim" if name_spaces == True else "não")
    print('Seu nome tem {} letras'.format(len(nome)))
    print('A primeira letra de seu nome é ', nome[0])
    print('A ultima letra do seu nome é ', nome[-1])
    splited = nome.split()
    print(splited)
else:
    print("Desculpe, você deixou campos vazios")