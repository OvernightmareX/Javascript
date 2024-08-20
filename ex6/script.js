let age = Number(prompt("Age minimum : "));
let minIncome = Number(prompt("Salaire maximum : ")); 
let minExpYear = Number(prompt("Nombre d'année d'expérience : ")); 

let ageOK = age >= 30;
let incomeOK = minIncome <= 40000; 
let expOK = minExpYear >= 5; 

let result = "Resultat = ";
let resultOK = true; 

let error = ""; 

if(!ageOK){
    resultOK = false; 
    error += "Age minimum non respecté.\n";
}

if(!incomeOK){
    resultOK= false; 
    error += "Salaire maximum non respecté.\n";
}

if(!expOK){
    resultOK= false; 
    error += "Expérience minimum non respecté.\n";
}

result = resultOK ? "Resultat : profil valide !\n" : "Resultat : profil non valide !\n"; 
result += error; 

alert(result); 