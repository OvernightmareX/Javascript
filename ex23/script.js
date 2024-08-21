function contactInput(nbContacts){
    let allContact = Array(); 
    let isDouble = false; 

    for(let i = 0; i < nbContacts; i++){
        contact = prompt("Veuillez saisir un contact : ");
        do{
            if(isDouble)
                contact = prompt("Contact existant, Veuillez resaisir le contact : ");

            isDouble = allContact.find((element) => element == contact);
        }while(isDouble); 

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
    display += "5. Supprimer un contact.\n"; 
    display += "6. Trouver un contact.\n"; 
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

function randSort(contacts) { 
    for (let i = contacts.length - 1; i > 0; i--) { 
      let j = Math.floor(Math.random() * contacts.length); 
      [contacts[i], contacts[j]] = [contacts[j], contacts[i]]; 
    } 
    return contacts; 
}

function deleteContact(allContact){
    let contactToDelete = prompt("Veuillez saisir le nom du contact à supprimer : "); 

    if(allContact.find((element) => element == contactToDelete))
        allContact = allContact.splice(allContact.indexOf(contactToDelete), 1); 
}

function findContact(allContact){
    let contactToFind = prompt("Veuillez saisir le nom du contact à trouver : "); 
    let isEqual;

    for(let c = 0 ; c < allContact.length; c++){
        let contact = allContact[c]; 

        for(let i = 0; i < contact.length; i++){
            if(contact[i] == contactToFind[0]){
                isEqual = true;

                for(let j = 0; j < contactToFind.length ; j++){

                    if(contact[i+j] == contactToFind[j])
                        continue;

                    isEqual = false;
                }

                if(isEqual){
                    console.log(contact); 
                    return true; 
                }
            }
        }
    }
    return false; 
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
            contacts = randSort(contacts); 
            break; 
        case 5: 
            deleteContact(contacts); 
            break; 
        case 6: 
            alert(findContact(contacts)); 
            break; 
    }

}while(choice != 0); 