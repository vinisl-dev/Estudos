## Libs para estudos
### FastAPI
### pydentic
### ruff



### cria um projeto
poetry new project 

### Configura o ambiente local
pyenv local verion-python

### cria um ambiente virtual na pasta do projeto
poetry install 

### instalando bibliotecas com poetry
poetry add fastapi
### Ativa ambiente virtual do poetry
poetry shell

### executando App com fastAPI
fastapi dev fast_zero/app.py

### libs de dev
#### Ruff
poetry add --group dev ruff - linter 
    - ruff check . - verifica problemas de formatação
    - ruff --fix - corrige formatação
    - ruff format . corrige formatação de strings

#### Pytest
    - poetry add --group dev pytest pytest-cov
    - pytest --cov=fast_zero -vv
    - coverage html

#### taskipy
    - poetry add --group dev taskipy
    - no arquivo pyproject criar as entradas com os     comandos: 
        [tool.taskipy.tasks]
        run = 'fastapi dev fast_zero/app.py'

        pre_test = 'task lint'
        test = 'pytest --cov=fast_zero -vv'
        pos_test = 'coverage html'
        
        lint = 'ruff check .; ruff check . --diff'
        format = 'ruff check . --fix ; ruff format .'
    - task 'alias'

