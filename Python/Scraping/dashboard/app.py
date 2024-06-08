import streamlit as st
import pandas as pd
import sqlite3

conn = sqlite3.connect("../transform/quotes.db")
df = pd.read_sql_query("SELECT * FROM quotes", conn)
conn.close()

st.title('Quotes Dashboard')

st.subheader('DataFrame')
st.write(df)

#total de citações
total_quotes = df.shape[0]
st.metric(label="Total de Citações", value=total_quotes)

unique_authors = df['author'].nunique()
st.metric(label="Número de Autores Únicos", value=unique_authors)

most_recent_collection = df['_data_coleta'].max()
st.metric(label="Data da Coleta Mais Recente", value=most_recent_collection)

#citaçoes por autor

st.subheader('Citações por Autor')
quotes_by_author = df['author'].value_counts()
st.bar_chart(quotes_by_author)

st.subheader('Algumas Citações')
for index, row in df.iterrows():
    st.write(f"**{row['author']}**: {row['text']}")

#execute streamlit ruin app.py

