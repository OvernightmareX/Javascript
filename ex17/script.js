let ask = (question, yes, no) => {
    if (confirm(question)) // affiche une boite de dialogue avec la possibilité d'accepter ou refuser
        yes();
    else 
        no();
}

let yes = () => alert("You agreed.");
let no = () => alert("You canceled the execution.");

ask("Do you agree?", yes, no);