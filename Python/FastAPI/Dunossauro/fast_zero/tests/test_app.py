from http import HTTPStatus


def test_read_root_deve_retornar_ok_e_ola_mundo(client):
    response = client.get('/')  # act
    assert response.status_code == HTTPStatus.OK  # assert
    assert response.json() == {'message': 'Olá mundo'}


def teste_create_user(client):
    response = client.post(
        '/users/',
        json={
            'username': 'teste',
            'email': 'teste@teste.com',
            'password': '123',
        },
    )
    assert response.status_code == HTTPStatus.CREATED
    assert response.json() == {
        'username': 'teste',
        'email': 'teste@teste.com',
        'id': 1,
    }

def test_read_users(client):
    response = client.get('/users/')


    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'users':[
        {
        'username': 'teste',
        'email': 'teste@teste.com',
        'id': 1,
        }
    ]}

def test_update_user(client):
    response = client.put(
        '/users/1',
        json={
        'password':'123',
        'username': 'maria',
        'email': 'maria@teste.com',
        'id': 1}
        )
    assert response.status_code == HTTPStatus.OK
    assert response.json() ==     {'username': 'maria',
        'email': 'maria@teste.com',
        'id': 1}

def teste_delete_user(client):
    response = client.delete('/users/1')
    assert response.json() == {'message':'User deleted'}




