function contactInput(nbContacts){
    let allContact = Array(); 
    for(let i = 0; i < nbContacts; i++){
        contact = prompt("Veuillez saisir un contact : ");
        allContact.push(contact);
    }
    return allContact; 
}

function displayContact(contacts){
    let result = ""; 
    contacts.forEach(element => {
        result += element + "\n"; 
    });
    console.log(result); 
}

function choiceInput(){
    let choice; 
    let display = ""; 
    display += "1. Resaisir les contacts.\n"; 
    display += "2. Afficher les contacts.\n"; 
    display += "3. Trier par ordre alphabétique.\n"; 
    display += "4. Ranger aléatoirement.\n"; 
    display += "0. Quitter.\n"; 
    display += "Votre choix : ";

    do{
        choice = Number(prompt(display));
        if(choice > -1 && choice < 7)
            return choice; 
        else
            alert("Votre choix est invalide !");
    }while(true)
}

let contactNb = Number(prompt("Veuillez saisir le nombre de contacts : "))
let contacts = contactInput(contactNb); 
let choice = 0;

do{
    choice = choiceInput(); 
    switch(choice){
        case 1: 
            contacts = contactInput(contactNb); 
            break; 
        case 2: 
            displayContact(contacts); 
            break; 
        case 3: 
            contacts.sort(); 
            break; 
        case 4: 
        contacts.sort(); 
        break; 
    }

}while(choice != 0); 