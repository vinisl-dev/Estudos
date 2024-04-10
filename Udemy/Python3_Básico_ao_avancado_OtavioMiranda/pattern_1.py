def pattern_1(rows):
  for i in range (1, rows +1):
    for j in range (i):
      print (i, end='')
    print('\r')



def pattern_2(rows):
  for i in range (1, rows +1):
    for j in range (1,i+1):
      print (j, end='')
    print('\r')

# pattern_1(5)
# print('\n')
pattern_2(5)