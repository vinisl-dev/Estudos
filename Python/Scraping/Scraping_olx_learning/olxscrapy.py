from parsel import Selector
import cloudscraper
import cloudscraper
import json

scraper = cloudscraper.create_scraper()
url = 'https://www.olx.com.br/imoveis/aluguel/estado-mt'

for i in range(1,101):
    r = scraper.get(f'{url}/?{i}')
    response = Selector(text=r.text)
    html = json.loads(response.xpath('//script[@id="__NEXT_DATA__"]/text()').get())
    houses = html.get('props').get('pageProps').get('ads')
    for house in houses:
        print({
            'title': house.get('title'), 
            'price': house.get('price'),
            'locations': house.get('location')
            })