let result = "Table des matière : \n"

for(let i = 1; i <= 3; i++){
    result += "\tChapitre " + i + ":\n";
    for(let j = 1; j <= 3; j++){
        result += "\t\t-partie " + i + "." + j + "\n"; 
    }
}
alert(result); // Dans la pop-up la tabulation est visible par un symbole. 
console.log(result); 