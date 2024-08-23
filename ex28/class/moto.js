import { Vehicle } from "./vehicle.js";

export class Moto extends Vehicle {

    constructor(brand, model, kilometer, year){
        super(brand, model, kilometer, year); 
    }

    display(){
        return super.display(); 
    }
}

