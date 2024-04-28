print('Content-type: text/html \n\n')
print("<style>body{font-family: Heebo;}</style>")

# dictdump = {"test1":"1", "teste2":123, "teste3":345}
print('<h1>DICTs & JSON (variável/arquivo)</h1>')

import json

with open("./dump.txt") as handle:
    dictdump = json.loads(handle.read())

print(f'dictdump é dict ? {isinstance(dictdump, dict)}<br>')
print(f'Dictdump: {dictdump}<br>')

print(f"dictdump['teste2']: {dictdump['teste2']}<br>")

str1 = json.dumps(dictdump)
print(f"dictdump é string ? {isinstance(str1, str)}<br>")
print(dictdump['itens'])
print(dictdump['itens']['sim'])
print(dictdump['veiculos']['1'])