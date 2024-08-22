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
    }, 
    { 
        prenom: "Marie", 
        nom: "Dubois", 
        matieres: { 
            francais: 18, 
            anglais: 13, 
            maths: 17, 
            sport: 12 
        } 
    },
    { 
        prenom: "Luc", 
        nom: "Martin", 
        matieres: { 
            francais: 10, 
            anglais: 9, 
            informatique: 15, 
            sport: 14 
        } 
    },
    { 
        prenom: "Sophie", 
        nom: "Lemoine", 
        matieres: { 
            francais: 14, 
            anglais: 14, 
            humour: 12, 
            arts: 19 
        } 
    },
    { 
        prenom: "Paul", 
        nom: "Durand", 
        matieres: { 
            francais: 12, 
            anglais: 8, 
            maths: 16, 
            histoire: 15, 
            musique: 14 
        } 
    }
];


let nbNote; 
let moyenne; 
let classement= [];

etudiants.forEach(etudiant => {
    console.log("###########DEBUT etudiant###########");
    console.log(`Etudiant : ${etudiant.nom} ${etudiant.prenom}`);

    nbNote = 0; 
    moyenne = 0;
    for(let matiere in etudiant.matieres){
        console.log(`  ${matiere} : ${etudiant.matieres[matiere]} / 20`);
        nbNote++; 
        moyenne += etudiant.matieres[matiere];
    }
    moyenne = moyenne / nbNote; 
    console.log(`La moyenne est de ${moyenne.toFixed(2)}`);
    console.log("############FIN etudiant############");

    let place = {nom: (etudiant.prenom + " " + etudiant.nom), moyenne}; 
    classement.push(place);

});
classement.sort((a, b) => b.moyenne - a.moyenne);
console.table(classement);
