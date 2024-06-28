import sqlalchemy as sa
from sqlalchemy import create_engine, text
from sqlalchemy.ext.asyncio import create_async_engine

metadata = sa.MetaData()
engine = create_engine('sqlite:///database.db', echo=True)
t = sa.Table('comments', metadata, autoload_with=engine)

print(engine)

with engine.connect() as connection:
    #apartir de 1 conexão realização n trasações
    with connection.begin():
# print(connection.connection.dbapi_connection)
# print(engine.pool.status())

        # sql = text('create table comments(id integer primary key autoincrement not null, name varchar(100), comment varchar(255),live varchar(200), created_at date);')

        # sql= text('insert into comments(name, comment,created_at) values("vini", "teste","2024-05-23")')
        sql = text('select id, name, comment from comments')
        result = connection.execute(sql)
        print(result.fetchall())



# t = sa.Table(
    'comments', metadata,
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('comment', sa.String(), nullable=False),
    sa.Column('live', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
# )

# engine = sa.create_engine('sqlite:///database.db')
# metadata.create_all(engine)
inspect = sa.inspect(engine)

print(inspect.get_table_names())
print(inspect.get_columns('comments'))

sql = sa.select(t)
print(sql)

with engine.connect() as con:
    result = con.execute(sql)
    print(result.fetchmany(10))