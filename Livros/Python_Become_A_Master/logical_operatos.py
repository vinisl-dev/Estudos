def check_numbers_range(num):
    if(num >= 10 and num <= 20) or (num < 30 or num > 40):
        return True
    else:
        return False
    
number1 = 15
number2 = 25
number3 = 35
    
print(check_numbers_range(number1))
print(check_numbers_range(number2))
print(check_numbers_range(number3))
    

def find_greatest(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else: 
        return num3

greatest = find_greatest(number1, number2, number3)
print(greatest)

#ternary operator python diff other languages

#assigning Maximum Value
x=10
y=20
max_value = x if x > y else y
print(max_value)

#checking Even or Odd
num = 15
result = "Even" if num %2 == 0 else "Odd"
print(result)

#Assigning Absolute value
num = -10
result = num if num >= 0 else -num
print(result)

# checking for Validity
username="john_doe"
message = "Valid" if len(username)>=8 else "Invalid"
print(message)

#Handling Division by zero:
dividend=10
divisor=3
result = dividend/divisor if divisor !=0 else "Error:Division by Zero"
print(result)
