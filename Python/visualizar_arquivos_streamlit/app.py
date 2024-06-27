

import streamlit as st
from pandas import read_csv


st.title("Vizualizador de Arquivos")

file = st.file_uploader(
    label='Suba seu arquivo aqui!',
    type=['txt','doc','pdf','csv','json','jpg','png','jpeg','mp3','mp4','mpeg','python'],
)

if file:
    # print(file.type)
    if file.type == 'text/plain':
        st.text(file.read().decode())
    elif file.type == 'application/jdon':
        st.json(file.read().decode())
    elif file.type == 'image/jpeg' or 'image/png':
        st.image(file)
    elif file.type == 'text/csv':
      df = read_csv(file)
      st.dataframe(df)
      st.line_chart(df.set_index('mês'))
      st.bar_chart(df.set_index('mês'))
    elif file.type == 'text/x-python':
        st.code(file.read().decode(), language = 'python')
    elif file.type == 'audio/mp3':
        st.audio(file)
    elif file.type == 'video/mp4':
        st.video(file)
    else:
        st.error('Formato de arquivo não suportado!')

else:
    st.warning('Ainda não tenho arquivo!')