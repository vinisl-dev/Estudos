def common_divisiors(num1, num2):
    #find the minimu of the two numbers
    min_num = min(num1, num2)
    
    #initialize a list to store common divisors
    common_divisiors_list = []
    
    #iterate through the range from 1 to min_num
    
    for i in range(1, min_num + 1):
        #check if both numbers are divisible by i without remainder
        if num1 % i == 0 and num2 % i == 0:
            common_divisiors_list.append(i)
    return common_divisiors_list

num1 = 12
num2 = 18

result = common_divisiors(num1, num2)
print(result)
    
    
def sum_of_squares_of_first_n(n):
    return n*(n+1)*(2*n+1)

n=1
result = sum_of_squares_of_first_n(n)
print('Sum of squares of the first', n , 'naturals numbers: ', result)