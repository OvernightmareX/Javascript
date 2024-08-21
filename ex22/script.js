function choice(){
    let display = "Choisir un mode de saisie:\n";
    display += "1 : Saisie fixe\n";
    display += "2 : Saisie jusqu'à note négative\n\n";
    display += "Votre choix : "; 
    return Number(prompt(display)); 
}

function inputUntilCorrect(grade){
    do{
        if(grade > -1 && grade < 21)
            return grade; 
        else
            grade = Number(prompt("ERREUR, veuillez réessayer : "));

    }while(true);
}

function gradeInput(nbGrades = -1){
    let allGrades = Array(); 
    let grade; 

    if(nbGrades != -1){
        for(let i = 0; i < nbGrades; i++){
            grade = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "));
            allGrades.push(inputUntilCorrect(grade));
        }
        return allGrades; 
    }
            
    do{
        grade = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "));
        if(grade < 0)
            break; 

        allGrades.push(inputUntilCorrect(grade));
    }while(true);
    
    return allGrades; 
}

function average(tab){
    let average = 0; 
    tab.forEach((item, index) => {
        average += item;  
    });
    return (average / tab.length);
}


let choix = choice(); 
let allGrades = Array(); 

switch(choix){
    case 1: 
        let nbGrades = prompt("Combien de notes ? "); 
        allGrades = gradeInput(nbGrades);
        break; 
    case 2: 
        allGrades = gradeInput();
        break; 
    default: 
        alert("Attention, vous n'avez pas entrer un choix valide !");
        break;
}


console.log("La note maximale est de " + Math.max(...allGrades) + " / 20");
console.log("La note minimal est de " + Math.min(...allGrades)  + " / 20");
console.log("La moyenne est de " + average(allGrades) + " / 20");