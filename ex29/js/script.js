import { Contact } from "./class/contact.js";

function addContactToTable(contact){
    let contactOutput = document.getElementById("contacts"); 

    let newContactRow = document.createElement('tr');
    for(let attribute in contact){
        let newContactInfo = document.createElement('td');
        newContactInfo.textContent = contact[attribute]; 
        newContactRow.appendChild(newContactInfo); 
    }
    contactOutput.appendChild(newContactRow)
}

let contacts =[]; 
contacts.push(new Contact("Mr", "Dupont", "Jean", "08/10/1973", "+(33)6 12 36 54 78", "jdupont@gmail.com")); 
contacts.push(new Contact("Mme", "Doe", "Jeanne", "24/02/1985", "+(33)6 45 23 87 14", "jdoe@yahoo.fr")); 
contacts.push(new Contact("Mr", "Martin", "Jacques", "22/06/1933", "+(33)6 78 45 24 95", "jmartin@petitrapporteur.fr")); 

contacts.forEach((element) => {
    addContactToTable(element);
});

const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newContact = new Contact(
        formData.get("civilite"), 
        formData.get("nom"), 
        formData.get("prenom"), 
        formData.get("date"), 
        formData.get("telephone"), 
        formData.get("email")); 
    contacts.push(newContact); 
    
    addContactToTable(newContact); 
    e.target.reset()
})