export class Vehicle {

    constructor(brand, model, kilometer, year){
        this.brand = brand; 
        this.model = model;
        this.kilometer = kilometer;
        this.year = year;
    }

    display(){
        return this.brand + " - " + this.model + " - " + this.kilometer + " - " + this.year; 
    }
}

