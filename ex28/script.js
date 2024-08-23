import { Moto } from "./class/moto.js";
import { Voiture } from "./class/voiture.js";

let car = new Voiture("Renault", "Kangoo", 240000, 2003, true); 
let bike = new Moto("BMW", "R1150R Rockster", 65000, 2005); 

let output = document.getElementById("allVehicule"); 

let carOutput = document.createElement("p"); 
carOutput.innerHTML = "<b>" + car.constructor.name + " : </b>" + car.display(); 

let bikeOutput = document.createElement("p"); 
bikeOutput.innerHTML = "<b>" + bike.constructor.name + " : </b>" + bike.display(); 

output.appendChild(carOutput); 
output.appendChild(bikeOutput); 