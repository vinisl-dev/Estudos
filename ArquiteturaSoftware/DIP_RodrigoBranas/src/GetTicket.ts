import pgp from "pg-promise";

export default class GetTicket {
    constructor(){

    }

    async execute(ticketId: string): Promise<Output>{
        const connection = pgp()("postgres://postgres:postgres@localhost:5432/postgres");
        const [ticketData] = await connection.query ("select * from branas.ticket where ticket_id = $1", [ticketId]);
        return {
            ticketId: ticketData.ticket_id,
            eventId: ticketData.event_id,
            email: ticketData.email,
            price: parseFloat(ticketData.price)
        }
    }

}



type Output = {
    ticketId: string,
    eventId: string,
    email: string,
    price: number
}