##SQLAlchemy


### Core componente reposavél por criar a conexão com o banco de dados, fazer buscas e definir tipos

#### Engine 
    - Connection: Interface para se comunicar com o banco de dados
    - Dialect: Mecanismo específico para cada banco de dados
    - Pool: Deixa conexões em memória par aser mais fácil reutilizar

#### SQL Expression Language: Construções em Python para representar SQL
#### Schema/Types: Construções em python que representam tabelas, colunas e tipos de dados

### Esquema: SQLAlchemy
_________________________________________________________________
ORM
                   Object Relational Mapper
_________________________________________________________________
CORE
        Engine -> Dialeto (sql do banco utilizado) -> DBAPI (driver do db)
__________________________________________________________________

    - create_engine: fabrica de conexões
        - Após a conexão é criado um pool de conexões em memória



* Contrução para realizar varias transações/operações em uma mesma conexão

        with engine.connect() as connection:
            with connection.begin():
                sql= text('insert into comments(name, comment,created_at) values("vini", "teste","2024-05-23")')
                result = connection.execute(sql)

                sql = text('select id, name, comment from comments')
                result = connection.execute(sql)

* Outro grupo de transações atomicos para execução na mesma conexão

           with connection.begin():
                sql= text('insert into comments(name, comment,created_at) values("vini", "teste","2024-05-23")')
                result = connection.execute(sql)

                sql = text('select id, name, comment from comments')
                result = connection.execute(sql)

#### Metodos retornado pelo execute em Result

    - .fetchone(): pega o primeiro
    - .fetchmany(3): / .partitions(3): pega alguns valores
    - .fetchall() / .all: pega todos os valores
    - .first(): Pega 1, mas não da erro se não conseguir

### Schemas / Types

    - Os metadados das tabelas podem ser descritos por Schemas e seus determinados Tipos
    - usando select do sqlalchemy pode fazer consultas semelhantes ao sql convencinal
    exemplo:
        sql = (
            select(t.c.id, t.c.name, t.c.comment)
            .where(t.c.name == 'dunossauro')
            .limit(10)
        )

#### class model ORM
form sqlalchemy.orm import DeclarativeBase

        class Base(DelarativeBase)
        ...
        class Comment(Base):
        __tablename__ = 'comments'

        id = Column(Integer, primary_key=True)
        name = Column(String, nullable=False)
        comment = Column(String, nullable= False)
        live = Column(String, nullable=False)
        created_at = Column(DateTime, server_default=func.now())