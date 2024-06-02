a = 5 #0101
b = 3 #0011
result = a & b
print("Bitwise AND:", result) #out 0001

result = a | b
print("Bitwise OR :", result) #out 0111 = 7

result = a ^ b
print("Bitwise XOR :", result) #out 0110 = 6

result = ~a
print("Bitwise NOT :", result) #out 1010 = 10 # wront this, the end bit is use for signal result correct is-6

result = a << 2
print("Bitwise Let shift << :", result) #out 10100 = 20

result = a >> 1
print("Bitwise Right shift >> :", result) #out 0010 = 2

# other example
a = 10 #1010
result = a>>1
print("Bitwise Right shift >> :", result) #out 0101 = 5


#determing whether a number is a power of two

def is_power_of_two(num):
    #a number is a power of two if it is greater than 0 and has exactly one bit set return num > 0 and (num & (num - 1)) == 0
    return num > 0 and (num & (num - 1)) == 0

num1 = 4
num2 = 6

print(num1, "is a power of two:", is_power_of_two(num1))
print(num2, "is a power of two:", is_power_of_two(num2))


# Sum odd even digit with bitwise

def sum_odd_even_digits(num):
    odd_sum = 0
    even_sum = 0
    
    while num > 0:
        digit = num % 10
        if digit % 2 == 0:
            even_sum +=digit
        else:
            odd_sum +=digit
        num //= 10
        
    return odd_sum, even_sum    
            
number = 123456
odd_sum, even_sum = sum_odd_even_digits(number)
print('Sum of odd digits', odd_sum)
print('Sum of even digits', even_sum)
