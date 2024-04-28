# reading files of one directory the system
#lendo arquivos de um diretorio do sistema

import os

def walk(dirname):
    for name in os.listdir(dirname):
        caminho = os.path.join(dirname, name) 
        if os.path.isfile(caminho):
                print(caminho)
        else:
            walk(caminho)   
            

if __name__ == '__main__':
    walk('./')
    