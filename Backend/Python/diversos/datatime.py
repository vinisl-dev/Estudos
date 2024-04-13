import datetime 

data = datetime.date(2024,4,13)
print(data)
print(data.ctime())

ano = data.year
mes = data.month
dia = data.day
print(dia, mes, ano)

nova_data = data.replace(day=2)
print(nova_data)
print(data)

hoje = datetime.date.today()
print(hoje)

delta = hoje - data
print(delta)
print(type(delta))

nova_data = data + delta
print(nova_data)

hora = datetime.time
print()

print(hora.minute)
print(hora.second)

print(datetime.datetime.now())



