## Aloha

### Bem vindo ao meu github
<p>&nbsp &nbsp Me chamo Vinicios e estou iniciando minha jornada aqui no git *03/01/2023*, o objetivo deste repositorio é compartilhar projetos ideias e conhecimento com a comunidade, ao mesmo tempo que me obrigo a criar uma rotina de desenvolvimento, 😄 para aperfeiçoar a adquirir novas habilidades para entrar de fez na area de desenvolvimento.
<p>&nbsp &nbsp Sou formado em tecnologia em sistema para internet pelo IFMT/EAD, mas ainda não atuo na àrea.


### Projetos

  |     Index     |                         Description                         |          Source                     |
  | :-----------: |                      :---------:                            | :---------:                         |
  |       1       | [API em camadas Nodejs/Express chamada simples a uma rota POST](https://github.com/vinisl-dev/Estudos/tree/main/Backend/Nodejs/api_em_camadas_Dani_Leao) |[Youtube/Daniele Leão](https://www.youtube.com/watch?v=82VxJWf0PVs)|
  |       2       | [Jogo da Forca - Vanilla](https://github.com/vinisl-dev/Estudos/tree/main/Frontend/Jogo_da_Forca_Vanilla_Diego_Pinho) | [Prof Diego Pinho](https://www.youtube.com/watch?v=KNH_-_esmaI) |


<br>
-----


## Criando uma instancia do postgresql integrada a uma instancia do PGadmin ambos rondando no docker
[Fonte: Prof. Diego Pinho - Programação / Youtube](https://www.youtube.com/watch?v=CdoBvd_bPdk)

```bash
#Observações verifique suas permissões para executar o docker, dependendo da instalação pode ser necessario usar o root
# docker run: comando para executar um container docker, caso não tenha uma imagem ela será baixada automaticamente do dockerhub
# --name: nome que voce pode escolher para sua imagem
# -p: mapeia a porta do banco de dados padrão 5432 em execução no container para a porta 5433 de sua maquina local, hospedeira do docker 
# -e: seta (configura), a variavél de ambiente da imagem do container, opção exigida pela imagem, neste caso é passada uma senha: postgres
# -d: executa o container em background, sem bloquear o terminal
# postgres: nome da imagem que deseja executar

$docker run --name postgres-docker -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d postgres

#docker ps: lista os container em execução
$docker ps

#suspende a execução do container
$docker stop containerID | name

#remove todas a imagens do sistema
$docker system prune -a

# lista as imagens diponiveis no sistema
$docker images

#cria uma rede virtual para os containers

--driver: tipo da rede
network-docker: nome escolhido para rede

$docker network create --driver bridge network-docker

# lista as redes disponiveis
$docker network ls

#Cria o container postgres adicionado-o a rede criada
$docker run --name postgres-docker --network=network-docker -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d postgres

#exibe informações sobre a rede e os containers que estão nela
$docker inspect network-docker

#criação do container com o PGadmin
docker run --name pgadmin-docker --network=network-docker -p 5434:80 -e PGADMIN_DEFAULT_EMAIL=postgres@gmail.com -e PGADMIN_DEFAULT_PASSWORD=postgres -d dpage/pgadmin4

#



```











