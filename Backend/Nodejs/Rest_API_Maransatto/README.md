## Projeto: API REST Nodejs com container Mysql
API backend em nodejs com a funcionalidade de um CRUD para gerenciar produtos e pedidos


---
### Fonte: 
[Maransatto](https://www.youtube.com/watch?v=d_vXgK4uZJM&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR)

---
### Funcionalidades e descrição do projeto

API Nodejs express, com acesso a banco de dados mysql que realiza operações de CRUD em produtos e pedidos, seguindo um padrão MVC

<br>

---
### Recursos e Tecnologias utilizadas
- Nodejs - runtimer JS
- Express - framework
- Docker 
- nodemon - live-reload
- morgan - biblioteca para log de eventos no terminal
- Vs code - editor de codigo fonte

```bash

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



``````