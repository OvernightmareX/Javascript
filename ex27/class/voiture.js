export class Voiture {

    constructor(brand, model, speed){
        this.brand = brand; 
        this.model = model;
        this.speed = speed;
    }

    accelerate(nb = 1){
        let result = ""; 
        for(let i = 0; i < nb; i++){
            this.speed += 10;
            result += `<p>La voiture <b>${this.brand} ${this.model}</b> avance désormais à <b>${this.speed}km/h</b></p>`; 
        }
        return result; 
    }

    turn(nb = 1){
        let result = ""; 
        for(let i = 0; i < nb; i++){
            this.speed -= 5;
            result += `<p>La voiture <b>${this.brand} ${this.model}</b> avance désormais à <b>${this.speed}km/h</b></p>`; 
        }
        return result; 
    }

    toString(){
        return `La voiture ${this.brand} ${this.model} avance désormais à ${this.speed}km/h`;
    }
}

