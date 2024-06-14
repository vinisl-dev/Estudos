import crypto from 'crypto'
import Room from './Room.js';
export default class Reservation{


    constructor(readonly reservationId:string,  readonly roomId: string, readonly email:string , readonly checkinDate: Date, readonly checkoutDate: Date, private duration: number, private price:number, private status: string){
    }

        static create(roomId: string, email:string , checkinDate: Date, checkoutDate: Date) {
            const reservationId = crypto.randomUUID();
            const duration = 0;
            const price = 0;
            const status = "active"
            return new Reservation(reservationId, roomId, email, checkinDate, checkoutDate, duration, price, status);
        }

        calculate(room:Room){
            this.duration = (this.checkoutDate.getTime() - this.checkinDate.getTime()) / (1000*60*60*24);
            this.price = this.duration * room.price;
        }

        getStatus(){
            return this.status;
        }
        getDuration(){
            return this.duration;
        }

        getPrice(){
            return this.price;
        }

}