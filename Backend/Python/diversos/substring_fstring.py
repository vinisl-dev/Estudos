print('DOCTYPE = html')
print('<html>')
print('<header>')
print('Content-type: text/html; charset=utf-8 \n\n')
print('</header>')

print('<h1>Substrings python 3 </h1>')

regua = "0123456789A123456789B"
print('<h3>String mestra: '+ regua + '</h3>')
print('<p>String[1:8] : '+ regua[1:8] + '</p>')
print('<p>String[1:-4] : '+ regua[1:-4] + '</p>')
print('<p>String[8:] : ' + regua[8:] + '</p>')

print('<h1>f-strings python3')
Nome = "jhon"
sobrenome="doe"

print(f"Muito prazser {Nome} da família {sobrenome}")

print('</html>')