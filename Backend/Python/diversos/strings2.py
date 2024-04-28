print ('Content-type: text/html; charset=utf-8 \n\n')
print('<h1>f-strings python3 - 2</h1>')

nome = 'simples da silva'

print(f"Muito prazer{nome.capitalize()}")
print(f"Seu nome tem {nome.count('a')} letras 'a'.")
print(f"Achei um 'da' na posição {nome.index('da')}")
try:
    print(f"Achei um 'de' na posição {nome.index('de')}")
except ValueError:
    print(f"não achei um 'de' em {nome}")
print() 
print('<h1> finde e replace</h1>')
print(f"Achei um 'da' na posição {nome.find('da')}")
print(f"Achei um 'de' na posição {nome.find('de')}")
print(f"Mudei o {nome} para {nome.replace('da', 'de')}")

print()
print('<h1>split</h1>')

registro = '001; Aurélio de Souza;Rua andradina 67; Canoas; Florianopolis;SC'
arr=registro.split(';')
print(f"Nome {arr[1]}")
print(f"Endereço {arr[2]}")
print(len(arr))