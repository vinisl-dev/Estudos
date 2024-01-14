
create database store;
USE STORE;
create table produtos(
  id_produto int(11) not null auto_increment,
  nome varchar(45) not null,
  preco float(11),
  primary key(id_produto)
);

CREATE TABLE pedidos(
  id_pedido int(11) not null auto_increment,
  id_produto int(11) not null,
  quantidade smallint(6) not null,
  primary key (id_pedido),
  constraint fk_pedidos_produtos FOREIGN key (id_produto) REFERENCES produtos (id_produto)
);
