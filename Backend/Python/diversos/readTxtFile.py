def trataArq(arquivo):
    f = open(arquivo, 'r')
    for line in f:
        print(line)
        
if __name__ == '__main__':
    trataArq('fileTxt.txt')