import scrapy

class Quotes(scrapy.Spider):
    name= 'q'
  

    def start_requests(self):
        yield scrapy.Request('http://quotes.toscrape.com/page/1')

    def parse(self, response, **kwargs):
        blocos = response.xpath('//div[@class="quote"]')
        for bloco in blocos:
            texto = bloco.xpath('./span[@class="text"]/text()').get()
            author = bloco.xpath('.//small/text()').get()
            tags = bloco.xpath('.//a[@class="tag"]/text()').getall()
            yield { 
                'texto':texto,
                'author':author,
                'tags':tags
            }

        proxima_pagina = response.xpath('//li[@class="next"]/a/@href').get()

        if proxima_pagina:
            
            yield response.follow(proxima_pagina, callback=self.parse)

           



