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
            result += this.toString(); 
        }
        return result; 
    }

    turn(nb = 1){
        let result = ""; 
        for(let i = 0; i < nb; i++){
            this.speed -= 5;
            result += this.toString(); 
        }
        return result; 
    }

    toString(){
        return `<p>La voiture <b>${this.brand} ${this.model}</b> avance désormais à <b>${this.speed}km/h</b></p>`;
    }
}

