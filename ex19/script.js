function compterLettreA(word){
    let aCpt = 0; 
    for(let i = 0; i < (word.length); i++){
        if(word.charAt(i) == "a")
            aCpt++; 
    }
    return aCpt
}

let wordInput = prompt("Insérer un mot : "); 
alert("résultat : " + compterLettreA(wordInput)); 