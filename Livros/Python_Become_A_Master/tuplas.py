# tuples are immutable, ordened collection of elements.

empty_tuple=(1,2,3,'a')

single_tuple = (42,)

# but dont recomended you can create a tuple without parentheses
no_parentheses_tuple = 1,2,3

for value in empty_tuple:
    print(value)
    
# you so interate about tuple of this index

for index in range(len(no_parentheses_tuple)):
    
    print('\t ', no_parentheses_tuple[index])
    
print(max(no_parentheses_tuple), min(no_parentheses_tuple)) #ocorre um erro se um item não for do tipo numerico
    
print(len('ola meu velho'))
print(max('ola meu velho'))
# nospace='ola meu velho'.replace(" ","")
print(min('ola meu velho'.replace(" ","")))


## Converting tuplas in string
#two ways

my_tuple = (1,2,3,4,5)

tuple_string = ','.join(str(element) for element in my_tuple)
print("tuple as string with for: ", tuple_string)

tuple_string2 = ','.join(map(str, my_tuple))
print('tuple string convert with map: ', tuple_string2)