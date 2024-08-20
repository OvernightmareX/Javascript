const maxCpt = 10; 

let result = "Je commence à compter (for) :\n";
for(let i = 1; i <= maxCpt; i++){
    result += i + "\n"; 
}
result += "Fin du compte !"; 
alert(result); 

i=1; 
result = "Je commence à compter (while) :\n";
while(i <= maxCpt){
    result += i++ + "\n"; 
}
result += "Fin du compte !"; 

alert(result); 
