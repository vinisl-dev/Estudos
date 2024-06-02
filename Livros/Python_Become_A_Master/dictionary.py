# dictionary in python is an unordered collection of key-value pair, each key is uniqueand immutable, são como json e objects in JS, your values is mutables


empty_dict = {}

my_dict = {'name':'Jhon', 
           'age':38,
           'city':'Rondonopolis'
           }
print(my_dict)

my_dict['name']='Teo' #access one element of dict

# Loops Pairs

for key, value in my_dict.items():
    print(key, '=', value)
    
#method get para get um element, get acept a default value outwise the key dont found

print(my_dict.get('city'))
print(my_dict.items()) # items return a list of dicts :)

test_dict = my_dict
print(test_dict['name'])
