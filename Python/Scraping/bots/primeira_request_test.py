#  python3 -m unittest primeira_request_test.py 
import unittest

import primeira_request

class QuoteTests(unittest.TestCase):
    def test_primeira_frase_req(self):
        esperado='“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”'
        atual = primeira_request.coletando_primeira_frase()
        self.assertEqual(atual, esperado)