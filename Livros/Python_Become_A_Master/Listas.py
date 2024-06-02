'''List in python are mutables, they can are alter for methods or index'''


my_list = [1,2,3,4,5]

print(my_list[0])
print(my_list[2])
my_list[1]=10
print(my_list[1])
my_list.append(6) #add in the end the list
print(my_list)

print(my_list.remove(3))
#my_list.remove(3) remove the value across how parameter in the function, erro because try remove one elemet already removed 
print(my_list)


# access elements by index of list

my_fruitList = ['apple', 'banana', 'cherry', 'date','elderberry']

print(my_fruitList)

print(my_fruitList[0])
print(my_fruitList[2])
print(my_fruitList[-1])
print(my_fruitList[-2])

my_fruitList[1]= 'blueberry'
my_fruitList[-2]='grape'
print(my_fruitList)
my_fruitList.append('date') #add in the end the list
print(my_fruitList)

my_fruitList.insert(0,'mamão') #append in a specific index
print(my_fruitList)

# You can concatenate (+)two lists to create a new list containing from both lists

number_list = [1,2,3]
my_fruitList += number_list
print(my_fruitList)

numbers2 = [3,1,4,1,5,90,6,5,3,9]
numbers2.sort()
print(numbers2)