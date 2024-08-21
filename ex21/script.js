
function fill(tab, tableauSize){
    for(let i = 0; i < tableauSize; i++){
        tab[i] = Math.ceil(Math.random() * 50); 
    }
}

let tableau = Array(); 
let tableauSize = prompt("Veuillez saisir la taille du tableau : ");

fill(tableau, tableauSize); 

let result = ""; 
tableau.forEach((item,index) => {
    result += "Le nombre " + item + " est "; 
    result += item % 2 == 0 ? "pair.\n" : "impair.\n"; 
})

console.log(result)