palavra_secreta="perfume"
tentativas = 0

palavra_secreta_array = palavra_secreta[0]
print (type(palavra_secreta_array))
while True:
    palavra_usuario = input("Digite uma letra: ")
    if (len(palavra_usuario) > 1):
        print("digite apenas uma letra")
        tentativas+=1
 