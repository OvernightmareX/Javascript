let tableau = Array(); 
let result = "";
const tabSize = 10;
const maxValue = 100;

function fill(tab){
    for(let i = 0; i < tabSize; i++){
        tab[i] = Math.round(Math.random() * maxValue); 
    }
}

/*
for(let i = 1; i <= tabSize; i++){
    tableau.push(prompt("Veuillez saisir la valeur " + i + " : "));
}*/

fill(tableau); 

tableau.forEach((item,index) => {
    result += "\n"
    for(let j = 0; j < index; j++)
        result += "    ";         

    result += item;
})

console.log(result)