# Api para aplicar os conceitos de desenvolvimento em camadas
Este projeto reproduz os conceitos apresentados na aula sobre o tema, ***Criando aplicação em camadas***, apresentado por **Daniele Leão** na presente [aula](https://www.youtube.com/watch?v=82VxJWf0PVs&t=1528s).
A arquitetura utilizada foi, <i><b>no que compreendi</b></i> uma variação da MVC, chamada de CSP - Controller, Service e Persistence

|Request| -> |Controller| -> |Service| -> |Persistence / Repository|

## Funcionalidades e descrição do projeto
O projeto trata-se de um API  simples apenas com a função de criar um registro em um banco de dados in-memory, no para o caso foi utilizado um array, a unica rota disponivél na API trata-se de uma rota do tipo POST para o endpoint "localhost:3000/users", com a função de adicionar um objeto json ao array e retorna-o após a inclusão.

## Tecnologias utilizadas
- Nodejs ( Ambiente de execução para javascript no lado servidor, por meio do motor do google V8, utilizado no navegador chrome )
- Nodemon (Daemon para life-reload da aplicação)
- Express (Framework para desenvolvimento de APIs backend com nodejs)
- curl (como de terminal linux para realizar HTTP, neste caso utilizado para fazer as chamadas à API)
- *obs. utlizada opção "type":"module" no package.json*

### Miscelaneas 


```bash
# Comando de terminal Linux curl 
# Requisição POST ao endpoint da API com o objeto json a ser enviado na requisição
 $ curl -X POST -d '{"username":"John", "name":"John Doe"}' -H 'Content-Type: application/json' http://localhost:3000/users
```