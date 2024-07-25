
import GetTicket from "../src/GetTicket";
import PurchaseTicket from "../src/PurchaseTicket";

test("Deve comprar um ingresso para o evento", async function () {
    const purchaseTicket = new PurchaseTicket();
    const inputPurchaseTicket = {
        eventId:"",
        email:"jhon.doe@gmail.com"
    }
    const outputPutchaseTicket = await purchaseTicket.execute(inputPurchaseTicket);
    expect(outputPutchaseTicket.ticketId).toBeDefined();
    const getTicket = new GetTicket();
    const outputGetTicket = await getTicket.execute(outputPutchaseTicket.ticketId);
    expect(outputGetTicket.ticketId).toBe(outputPutchaseTicket.ticketId);
    expect(outputGetTicket.eventId).toBe(inputPurchaseTicket.eventId);
    expect(outputGetTicket.email).toBe(inputPurchaseTicket.email);
    expect(outputGetTicket.price).toBe(100);

});