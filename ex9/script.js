let n = Number(prompt("Entrer N : ")); 
let result1 = ""; 
let result2 = ""; 

let header = "   ";
for (let i = 1; i <= 10; i++) {
    header += "\t" + i;
}
header += "\n-------------------------------------------------\n";

for(let i = 1; i <= n; i++){
    result1 += "Tables des " + i + " : \n";
    for(let j = 1; j <= 10; j++){
        result1 += i + " x " + j + " = " + (i+j) + "\n"; 
        result2 += "\t" + (i * j); 
    }
    result1 += "\n"
    result2 += "\n"
}

console.log(result1); 
console.log(header + result2); 

