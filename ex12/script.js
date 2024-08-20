let initPopulation = Number(prompt("Entrer la population initiale : ")); 
let growthCoeff = Number(prompt("Entrer le taux d'accroissement : ")); 
let targetPopulation = Number(prompt("Entrer la population souhaité : ")); 

let newPopulation = initPopulation; 
let yearToTarget = 0; 

while (newPopulation <= targetPopulation){
    newPopulation = newPopulation + (newPopulation*(growthCoeff/100)); 
    yearToTarget++; 
}

alert("La population dépasse la population visée à l'année "+ yearToTarget +" ("+ Math.round(newPopulation) +" habitants)");

