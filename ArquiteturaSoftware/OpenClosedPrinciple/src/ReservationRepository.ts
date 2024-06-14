import Reservation from "./Reservation.js";
import pgp from "pg-promise"

export default interface ReservationRespository{
    save(reservation: Reservation): Promise<void>;
    get(reservationId:string ): Promise<Reservation>;

}

export class ReservationRepositoryDatabase implements ReservationRespository{
async save(reservation: Reservation): Promise<void> {
    const connection = pgp()("postgres://postgres:123456@localhost:5432/branas");
    await connection.query("insert into branas.reservation (reservation_id, room_id, email, checkin_date, checout_date, duration, price, status) values ($1, $2, $3, $4, $5, $6. $7, $8)", [reservation.reservationId, reservation.roomId,reservation.email ,reservation.checkinDate, reservation.checkoutDate, reservation.getDuration(), reservation.getPrice(), reservation.getStatus()]);
    await connection.$pool.end();
    }
    
async get(reservationId: string): Promise<Reservation> {
    const connection = pgp()("postgres://postgres:123456@localhost:5432/branas");
    const [reservationData] = await connection.query("select * from branas.reservation where reservation_id = $1",[reservationId])
    await connection.$pool.end();
    return new Reservation(reservationData.reservation_id, reservationData.room_id, reservationData.email, reservationData.checkin_date, reservationData.checout_date, parseFloat(reservationData.duration), parseFloat(reservationData.price), reservationData.status)
}

}