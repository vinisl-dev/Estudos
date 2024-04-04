print ("Bem vindo a meu jogo de perguntas sobre computadores!")

playing = input("Você quer jogar? reponda sim")
if playing.lower() != "sim":
  quit()
print("Ok, vamos jogar: ")
score = 0

resposta = input ("O que singnifica CPU ?")
if resposta.lower() == "unidade central de processamento":
  print("Correto!")
  score += 1
else:
  print("Errado!")

resposta = input("O que significa GPU?")
if resposta.lower() == "unidade de processamento grafico":
  print("correto!")
  score += 1
else:
  print("Errado!")

resposta = input("O que significa RAM?")
if resposta.lower() == "memoria de acesso randomico":
  print("Correto!")
  score += 1
else:
  print ("Errado!")

resposta = input("O que siginifica PSU ?")    
if resposta.lower() == "fonte de energia":
  print("Correto!")
  score += 1
else:
  print("Errado!")
  
print("Você fez "+str(score)+ " respostas corretas!")
print("Voce fez "+str((score / 4)*100)+ "%.")