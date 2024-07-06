# Iteravel


# texto = iter('Vinicios')

# print(texto.__next__())
# print(texto.__next__())
# print(texto.__next__())
# print(next(texto))
# print(next(texto))
# print(next(texto))
# print(next(texto))
# print(next(texto))
# print(next(texto))


texto = 'luiz'
iterator = iter(texto)

while True:
    try:
        print(next(iterator))
    except StopIteration: 
        break
