function verificationAdn(word){
    for(let i = 0; i < (word.length); i++){
        let c = word.charAt(i);
        c = c.toLowerCase();
        if(c == "a" || c == "t" || c == "c" || c == "g")
            continue; 

        return false;
    }
    return true; 
}

function saisieAdn(word){
    return verificationAdn(word) ? word : null; 
}

function proportion(chaine, sequence){
    let cpt = 0;
    let maxCpt = 0;
    for(let i = 0; i < chaine.length; i++){
        if(chaine.charAt(i) == sequence.charAt(0)){
            for(let j = 0; j < sequence.length ; j++){
                if(chaine.charAt(i+j) == sequence.charAt(j))
                    cpt++;
                else
                    break;
            }
            
            maxCpt = cpt > maxCpt ? cpt : maxCpt; 
            cpt = 0; 
        }
    }

    console.log(maxCpt);
    let result = (maxCpt * 100) / chaine.length; 
    console.log("Il y a " + result + "% de " + sequence + " dans la chaine " + chaine); 
}

let chaineInput = prompt("Saisir la chaine : "); 
chaineInput = saisieAdn(chaineInput);

if(chaineInput != null){
    let seqInput = prompt("Saisir la sequence : "); 
    seqInput = saisieAdn(seqInput);

    if(chaineInput != null)
        proportion(chaineInput, seqInput);
    else
        console.log("Erreur de saisie!!!"); 
}
else
    console.log("Erreur de saisie!!!"); 
