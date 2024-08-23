import { Vehicle } from "./vehicle.js";

export class Voiture extends Vehicle {

    constructor(brand, model, kilometer, year, clim){
        super(brand, model, kilometer, year); 
        this.clim = clim;
    }

    display(){        
        let result = super.display(); 
        result += this.clim ? " - Climatisée" : " - Non climatisée" 
        return result; 
    }
}

