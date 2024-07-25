import crypto from "crypto";
import pgp from "pg-promise";


export default class PurchaseTicket{
    constructor(){

    }

   async execute (input: Input): Promise<Output> {
        const ticketId = crypto.randomUUID();
        const connection = pgp()("postgres://postgres:postgres@localhost:5432/postgres");
        const [eventData] = await connection.query("select * from branas.event where event_id = $1", [input.eventId]);
        await connection.query("insert into branas.ticket (ticket_id, event_id, email, price) values ($1, $2, $3, $4)", [ticketId, input.eventId, input.email, eventData.price]);
        return{ ticketId }        

    }

}

type Input = {
    eventId: string,
    email: string
}

type Output = {
    ticketId: string
}