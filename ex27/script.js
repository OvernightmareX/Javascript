import { Voiture } from "./class/voiture.js";

let car1 = new Voiture("BMW", "Serie 1", 80); 
let car2 = new Voiture("Mercedes", "GLB", 100);

let output = document.getElementById("display"); 
output.innerHTML += car1.accelerate(3); 
output.innerHTML += car2.accelerate(2); 
output.innerHTML += car2.turn(2); 
