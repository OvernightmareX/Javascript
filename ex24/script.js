let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

let nbNote; 
let moyenne; 

etudiants.forEach(element => {
    console.log("###########DEBUT etudiant###########");
    console.log(`Etudiant : ${element.nom} ${element.prenom}`);

    nbNote = 0; 
    moyenne = 0;
    for(let matiere in element.matieres){
        console.log(`${matiere} : ${element.matieres[matiere]} / 20`);
        nbNote++; 
        moyenne += element.matieres[matiere];
    }
    moyenne = moyenne / nbNote; 
    console.log(`La moyenne est de ${moyenne.toFixed(2)}`);
    console.log("############FIN etudiant############");

});
