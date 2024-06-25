from fastapi import FastAPI
from http import HTTPStatus
from fastapi.responses import HTMLResponse
from fast_zero.schemas import Message

app = FastAPI()


@app.get('/', status_code = HTTPStatus.OK, response_model= Message)
def read_root():
    return {'message': 'Olá mundo'}


#     return """
#     <html>
#         <header>
#             <title>Nosso olá mundo!</title>
#         </header>
#         <body>
#             <h1>Olá mundo</h1>
#         </body>
#     </html>
# """