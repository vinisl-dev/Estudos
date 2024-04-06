# Aplicação pass.in em python backend - flask



## Dependencias
    - SQLAchemy
    -pytest


# comando de testes
pytest -s -v src/models/repository/events_repository_test.py 









# Comandos de terminal

    - pip install SQLAlchemy
    - pip install pytest


Esses são alguns dos principais comandos de terminal para Linux e Windows:

## Linux:

1. **`ls` (Listar):** Exibe o conteúdo do diretório atual.
    
    ```bash
    ls
    
    ```
    
2. **`cd` (Mudar Diretório):** Muda para o diretório especificado.
    
    ```bash
    cd nome_do_diretorio
    
    ```
    
3. **`pwd` (Caminho Atual):** Exibe o caminho do diretório atual.
    
    ```bash
    pwd
    
    ```
    
4. **`cp` (Copiar):** Copia arquivos ou diretórios.
    
    ```bash
    cp origem destino
    
    ```
    
5. **`mv` (Mover):** Move ou renomeia arquivos ou diretórios.
    
    ```bash
    mv origem destino
    
    ```
    
6. **`rm` (Remover):** Remove arquivos ou diretórios.
    
    ```bash
    rm nome_do_arquivo
    
    ```
    
7. **`mkdir` (Criar Diretório):** Cria um novo diretório.
    
    ```bash
    mkdir nome_do_diretorio
    
    ```
    
8. **`rmdir` (Remover Diretório):** Remove um diretório vazio.
    
    ```bash
    rmdir nome_do_diretorio
    
    ```
    
9. **`cat` (Concatenar e Exibir):** Exibe o conteúdo de arquivos.
    
    ```bash
    cat nome_do_arquivo
    
    ```
    
10. **`grep` (Pesquisar):** Pesquisa padrões em arquivos.
    
    ```bash
    grep padrão arquivo
    
    ```
    

## Windows:

1. **`dir` (Listar):** Exibe o conteúdo do diretório atual.
    
    ```
    dir
    
    ```
    
2. **`cd` (Mudar Diretório):** Muda para o diretório especificado.
    
    ```
    cd caminho_do_diretorio
    
    ```
    
3. **`chdir` (Mudar Diretório - alternativa):** Muda para o diretório especificado.
    
    ```
    chdir caminho_do_diretorio
    
    ```
    
4. **`copy` (Copiar):** Copia arquivos ou diretórios.
    
    ```
    copy origem destino
    
    ```
    
5. **`move` (Mover):** Move ou renomeia arquivos ou diretórios.
    
    ```
    move origem destino
    
    ```
    
6. **`del` (Remover):** Remove arquivos.
    
    ```
    del nome_do_arquivo
    
    ```
    
7. **`mkdir` (Criar Diretório):** Cria um novo diretório.
    
    ```
    mkdir nome_do_diretorio
    
    ```
    
8. **`rmdir` (Remover Diretório):** Remove um diretório vazio.
    
    ```
    rmdir nome_do_diretorio
    
    ```
    
9. **`type` (Exibir Conteúdo):** Exibe o conteúdo de arquivos.
    
    ```
    type nome_do_arquivo
    
    ```
    
10. **`findstr` (Pesquisar):** Pesquisa padrões em arquivos.
    
    ```
    findstr padrão arquivo
    
    ```
    

Estes são apenas alguns comandos básicos e ambos os sistemas operacionais têm uma variedade de comandos adicionais e opções. Lembre-se de consultar a documentação relevante ou usar as opções de ajuda (`--help` ou `/help`) para obter informações detalhadas sobre cada comando.

# Principais comandos no GIT

1. **Configuração Inicial:**
    - `git config --global user.name "Seu Nome"`: Define o nome do usuário globalmente.
    - `git config --global user.email "seu@email.com"`: Define o e-mail do usuário globalmente.
2. **Iniciar um Repositório:**
    - `git init`: Inicia um novo repositório Git.
3. **Clonar um Repositório Existente:**
    - `git clone <URL do Repositório>`: Clona um repositório Git existente para o seu diretório local.
4. **Fazer Alterações:**
    - `git status`: Mostra o status das alterações no seu repositório.
    - `git add <arquivo>`: Adiciona um arquivo ao staging area.
    - `git add .` ou `git add -A`: Adiciona todas as alterações ao staging area.
    - `git reset <arquivo>`: Remove um arquivo do staging area.
5. **Confirmar Alterações:**
    - `git commit -m "Mensagem de Commit"`: Confirma as alterações no repositório local.
6. **Ramos (Branches):**
    - `git branch`: Lista todos os ramos locais.
    - `git branch <nome-do-ramo>`: Cria um novo ramo.
    - `git checkout <nome-do-ramo>`: Muda para um ramo específico.
    - `git merge <nome-do-ramo>`: Mescla um ramo com o ramo atual.
7. **Atualizar e Receber Alterações:**
    - `git pull`: Atualiza o repositório local com as alterações do repositório remoto.
    - `git push`: Envia as alterações locais para o repositório remoto.
8. **Histórico e Diferenças:**
    - `git log`: Mostra o histórico de commits.
    - `git diff`: Mostra as diferenças entre alterações no código.
9. **Desfazer Alterações:**
    - `git checkout -- <arquivo>`: Desfaz alterações não confirmadas em um arquivo.
    - `git reset --hard HEAD`: Desfaz todas as alterações locais.
10. **Tags:**
- `git tag -a <nome-da-tag> -m "Mensagem"`: Cria uma tag anotada.
- `git tag`: Lista todas as tags existentes.

Estes são apenas alguns dos comandos Git básicos. Existem muitos outros comandos e opções disponíveis. Você pode usar `git --help` ou consultar a documentação oficial do Git para obter mais informações.

https://git-scm.com/doc








