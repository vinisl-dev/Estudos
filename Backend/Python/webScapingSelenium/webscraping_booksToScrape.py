import pandas as pd

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

service = Service()
options = webdriver.ChromeOptions()

driver = webdriver.Chrome(service=service, options=options)

url='https://books.toscrape.com/'

driver.get(url)

titleElements = driver.find_elements(By.TAG_NAME,'a')[54:94:2]
titleList = [title.get_attribute('title') for title in titleElements]

titleElements = driver.find_elements(By.TAG_NAME,'a')[54:94:2] #pega todos os elementos da pagina dentro do intervalo com passo 2
stockList = []
for title in titleElements:
  title.click()
  qtStock = int (driver.find_element(By.CLASS_NAME,'instock').text.replace('In stock (','').replace(' available)',''))
  stockList.append(qtStock)
  driver.back()  #volta para pagina anterior

dictDF = {'title':titleList,
          'stock':stockList
          }

result = pd.DataFrame(dictDF)
print(result)

