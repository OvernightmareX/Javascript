let n = Number(prompt("Entrer N : ")); 
let result = ""; 
let row = ""; 
let max_star = 1; 

for(let i = 1; i <= n; i++){

    for(let j = 1; j <= n-i; j++){
        row += " "; 
    }

    for(let k = 1; k <= max_star ; k++){
        row += "*";
    }
    max_star += 2; 

    row += "\n"; 
    result += row; 
    row = "";
}

console.log(result); 