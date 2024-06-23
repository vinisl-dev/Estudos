import pandas as pd
import sqlite3
from datetime import datetime

origem = "quotes_scrapy"
df = pd.read_csv("../quoteScraping/quotes.csv")
df['_origem'] = origem
df['_data_coleta'] = datetime.now()
conn = sqlite3.connect('quotes.db')
df.to_sql('quotes', conn, if_exists='replace', index=False)

conn.close()

# execute python transform.py