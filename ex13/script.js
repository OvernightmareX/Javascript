let nbr = Number(prompt("Saisir un nombre entier : ")); 
let row = ""
let currentNbr = 0; 
let cpt; 
let result = "";

for(let i = 1; i <= Math.ceil(nbr/2); i++){

    currentNbr = 0; 
    cpt = i;

    row = nbr + " = ";  
    while(currentNbr < nbr){
        row += cpt + "+"; 
        currentNbr += cpt;
        cpt++;
    }

    if(currentNbr === nbr) 
        result += row + "\n"; 

    row = ""; 
}
console.log(result);