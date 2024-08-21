function isPalindrome(word){
    if(word.length % 2 == 0)
        return false; 

    for(let i = 0; i < word.length/2; i++){
        if(word.charAt(i) != word.charAt((word.length-1)-i))
            return false; 
    }

    return true; 
}

let wordInput = prompt("Insérer un mot : "); 

alert(isPalindrome(wordInput.trim().toLowerCase())); 