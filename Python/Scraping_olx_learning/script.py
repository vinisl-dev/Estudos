import requests
from parsel import Selector
import json
url = 'https://www.olx.com.br/imoveis/aluguel/estado-mt'
r = requests.get(url, headers={'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'}) 
s = Selector(text = r.text)
html = json.loads(s.xpath('//script[@id="__NEXT_DATA__"]/text()').get())
houses = html.get('props').get('pageProps').get('ads')


