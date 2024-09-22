import requests


def coletando_frases():
    r = requests.get('https://quotes.toscrape.com')

    # print(r.text)
    html = r.text.split("\n")
    # print(html)
    frases = []
    for linha in html:
        if '<span class="text" itemprop="text">' in linha:
            linha = linha.replace('<span class="text" itemprop="text">', '').replace('</span>', '')
            linha = linha.strip()
            frases.append(linha)
    return frases

def coletando_primeira_frase():
    primeira_frase=coletando_frases()
    return primeira_frase[0]
        # if '<small class="author" itemprop="author">' in linha:
        #     linha = linha.replace('<span>by <small class="author" itemprop="author">','').replace('</small>','')
        #     linha = linha.strip()
        #     print(linha)
    