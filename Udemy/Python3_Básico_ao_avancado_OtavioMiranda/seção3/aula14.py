a = 'A'
b = 'B'
c = 1.1

#string = 'a={} b={} c={:.2f}'
#string = 'a={0} b={1} c={2:.2f}'
#formato = string.format(a, b, c)

string = 'a={0} b={nome2} c={nome3:.2f}'
formato = string.format(a, nome2=b, nome3=c)
print(formato)