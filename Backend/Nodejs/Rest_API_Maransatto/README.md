## Projeto: API REST Nodejs com container Mysql
API backend em nodejs com a funcionalidade de um CRUD para gerenciar produtos e pedidos


---
### Fonte: 
[Maransatto](https://www.youtube.com/watch?v=d_vXgK4uZJM&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR)

---
### Funcionalidades e descrição do projeto

API Nodejs express, com acesso a banco de dados mysql que realiza operações de CRUD em produtos e pedidos, seguindo um padrão MVC

<br>

#### Problemas/Dificultades durante a implementação: ####
 Problemas com as variaveis de ambiente, poderia ter usado outra opção no dotenv, mas preferi settar na mão :(

---
### Recursos e Tecnologias utilizadas
- Nodejs - runtimer JS
- Express - framework
- Docker 
- nodemon - live-reload
- morgan - biblioteca para log de eventos no terminal
- Vs code - editor de codigo fonte

```bash


inserindo um produto
curl -X POST -d '{"nome":"vida louca", "preco":100}' -H 'Content-Type: application/json' http://localhost:3000/produtos

alterar produto
curl -X PATCH -d '{"nome":"uma mente brilhante", "preco":200, "id":"2"}' -H 'Content-Type: application/json' http://localhost:3000/produtos

deletar um produto
curl -X DELETE -d '{"id":2}' -H 'Content-Type: application/json' http://localhost:3000/produtos
// Obs. o produto produtos que estã relacionados na tabela pedidos ainda não podem ser removidos

consulta todos os produtos
curl http://localhost:3000/produtos


inserindo um pedido
curl -X POST -d '{"id_produto":1, "quantidade":10}' -H 'Content-Type: application/json' http://localhost:3000/pedidos



#Criação do MariaDb Docker

#faz download da imagem
docker pull mariadb
#lista as imagens diponiveis no computador 
docker images
#executa o container e passa as configurações necessarias
docker run -p 3306:3306 --name mysql-dev -e MYSQL_ROOT_PASSWORD=root -d mariadb

#lista os container em execuçao no sistema host
docker ps

#roda/inicia uma container ja existente
docker container start mysql-dev

``````

