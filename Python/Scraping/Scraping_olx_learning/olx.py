import scrapy
import json
from parsel import Selector
import cloudscraper


url = 'https://www.olx.com.br/imoveis/aluguel/estado-mt'

class OlxHouses(scrapy.Spider):
    name = 'olx'
 
    custom_settings = {
        'USER_AGENT' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHORTTLE_START_DELAY':20
    }
 
    def start_requests(self):
        for page in range(1,101):
            yield scrapy.Request(f'{url}?o={page}')
    #    com proxy zenrows    yield scrapy.Request(f'{url}?o={page}', meta={'proxy':'culs'})
 
    def parse(self, response, **kwargs):
        html = json.loads(response.xpath('//script[@id="__NEXT_DATA__"]/text()').get())
        houses = html.get('props').get('pageProps').get('ads')
        for house in houses:
            yield{
                'title' : house.get('title'),
                'price' : house.get('price'),
                'locations' : house.get('location')
            }
 
 
# zenrows, pago proxy para evitar bloqueio de bots
# gratis cloudscraper
# pip install cloudscraper
