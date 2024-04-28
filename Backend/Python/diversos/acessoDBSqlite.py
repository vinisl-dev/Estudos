print('<h1> Sqlite</h1>')

import sqlite3
conn =''
rs = ''
try:
    conn = sqlite3.connect('./banco.db')
    print("Opened database  successefully")
except ValueError:
    print("Database error")
cur = conn.cursor()
try:
    rs = cur.execute("select * from Teste")
    print("Opened recordset successfully")
    print("<table>")
    for row in rs:
        tId = row[0]
        tDescri  = row[1]
        print(f'<tr><td>{tId}</td><td>{tDescri}</td></tr>')
    print("</table>")
except Exception as e:
    print("Tabela não existe. Exception: {}".format(e))

