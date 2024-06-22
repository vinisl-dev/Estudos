export default abstract class PriceCalculator{
    calculate(checkinDate: Date, checkoutDate: Date, roomPrice: number): {duration: number, price: number}{
        const duration = this.calculateDuration(checkinDate, checkoutDate);
        const price = duration * roomPrice;
        return {
            duration,
            price
        }
    }
    abstract calculateDuration(checkinDate: Date, checkOutDate: Date): number;
}


export class DayPriceCalculator extends PriceCalculator{
    calculateDuration(checkinDate: Date, checkOutDate: Date): number {
        return (checkOutDate.getTime() - checkinDate.getTime()) / (1000*60*60*24);
        
    }
}

export class HourPriceCalculator extends PriceCalculator{
    calculateDuration(checkinDate: Date, checkOutDate: Date): number {
        return  (checkOutDate.getTime() - checkinDate.getTime()) / (1000*60*60);
     
        
    }
}

export class PriceCalculateFactory {
    static create (type:string){
        if (type === "day") return new DayPriceCalculator();
        if (type === "hour") return new HourPriceCalculator();
        throw new Error();
    }
}
