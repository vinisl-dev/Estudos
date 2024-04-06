import pytest
from src.models.settings.connection import db_connection_handler
from .events_repository import EventsRepository

db_connection_handler.connect_to_db()

@pytest.mark.skip(reason="novo registro em banco de dados")
def test_insert_event():
  event = {
    "uuid":"meu-uuuid-e-nois",
    "title":"meu title",
    "slug": "meu slug",
    "maximum_attendees":20
  }
  event_repository = EventsRepository()
  response = event_repository.insert_event(event)
  print(response)
  
def test_get_event_by_id():
    event_id = "meu-uuuid-e-nois"
    event_repository = EventsRepository()
    response = event_repository.get_event_by_id(event_id)
    print(response)