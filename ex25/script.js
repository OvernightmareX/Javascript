
function inputUntilCorrect(grade){
    do{
        if(grade > -1 && grade < 21)
            return grade; 
        else
            grade = Number(prompt("ERREUR, veuillez réessayer : "));

    }while(true);
}

function gradeInput(nbGrades){
    let allGrades = Array(); 
    let grade; 

    for(let i = 0; i < nbGrades; i++){
        grade = Number(prompt("Veuillez entrer une note entre 0 et 20 compris : "));
        allGrades.push(inputUntilCorrect(grade));
    }
    return allGrades; 
}

function average(tab){
    let average = 0; 
    tab.forEach((item, index) => {
        average += item;  
    });
    return (average / tab.length);
}

let allGrades = Array(); 
let nbGrades = prompt("Combien de notes ? "); 
allGrades = gradeInput(nbGrades);

let max = Math.max(...allGrades);
let min = Math.min(...allGrades);
let moyenne = average(allGrades);

const maSerie = document.getElementById("serie"); 
maSerie.innerHTML = "La série contient <b>"+ allGrades.length +" notes</b> :"

const gradeDisplay = document.getElementById("allGrades");
allGrades.forEach(grade => {
    const li = document.createElement("li");
    li.innerHTML = `En note <b>${allGrades.indexOf(grade)}</b>, vous avez saisi <b>${grade}/20</b>`;
    gradeDisplay.appendChild(li);
});

const monEnsemble = document.getElementById("ensemble"); 
maSerie.innerHTML = "Sur l'ensemble des <b>"+ allGrades.length +" notes</b> :"

const bwaDisplay = document.getElementById("bwa");

const best = document.createElement("li");
best.innerHTML = `La meilleur note est de <b>${max}</b>/20`;
best.style.color = "green"; 
bwaDisplay.appendChild(best);

const worst = document.createElement("li");
worst.innerHTML = `La moins bonne note est de <b>${min}</b>/20`;
worst.style.color = "red"; 
bwaDisplay.appendChild(worst);

const ave = document.createElement("li");
ave.innerHTML = `La moyenne des notes est de <b>${moyenne}</b>/20`;
bwaDisplay.appendChild(ave);
