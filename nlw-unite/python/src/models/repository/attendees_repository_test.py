import pytest
from .attendees_repository import AttendeesRepository
from src.models.settings.connection import db_connection_handler

db_connection_handler.connect_to_db()
@pytest.mark.skip(reason="novo registro em banco")
def test_insert_attendee():
    event_id = "meu-uuid-e-nois"
    attendees_info = {
        "uuid":"meu-uuid-attendee",
        "name":"vinicios",
        "email":"email@email.com",
        "event_id":event_id,
    }

    attendees_repository = AttendeesRepository()
    response = attendees_repository.insert_attendee(attendees_info)
    print(response)
    
@pytest.mark.skip(reason="...")
def test_get_attendee_badage_by_id():
    attendee_id = "meu-uuid-attendee"
    attendees_repository = AttendeesRepository()
    attendee = attendees_repository.get_attendee_badge_by_id(attendee_id)
    print(attendee) 
    print(attendee.title) 
    
    