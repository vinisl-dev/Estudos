import MakeReservation from "../src/MakeReservation.js";
import { ReservationRepositoryDatabase } from "../src/ReservationRepository.js";
import { RoomRepositoryDatabase } from "../src/RoomRepository.js";

//TDD Give - when - then
test("Deve fazer uma reserva, de uma quarto com, pagamento por dia", async function (){
    const roomRepository = new RoomRepositoryDatabase();
    const reservationRepository = new ReservationRepositoryDatabase();
    const makeReservation = new MakeReservation(roomRepository, reservationRepository);
    const inputMakeReservation = {
        roomId:"aa354842-59bf-42e6-be3a-6188dbb5fff8",
        email:"jhon.doe@gmail.com",
        checkinDate: new Date("2023-03-01T10:00:00"),
        checkoutDate: new Date("2023-03-05T10:00:00")
    };

    const outputMakeReservation = await makeReservation.execute(inputMakeReservation);

    expect(outputMakeReservation.reservationId).toBeDefined();
});