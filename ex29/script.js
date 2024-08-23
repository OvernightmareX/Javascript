import { Contact } from "./class/contact.js";

let contacts =[]; 
contacts.push(new Contact("Mr", "Dupont", "Jean", "08/10/1973", "06 12 36 54 78", "email@az.com")); 
contacts.push(new Contact("Mr", "Dupont", "Jean", "08/10/1973", "06 12 36 54 78", "email@az.com")); 
contacts.push(new Contact("Mr", "Dupont", "Jean", "08/10/1973", "06 12 36 54 78", "email@az.com")); 

let contactOutput = document.getElementById("contacts"); 

contacts.forEach((element) => {
    let newContactRow = document.createElement('tr');
    for(let attribute in element){
        let newContactInfo = document.createElement('td');
        newContactInfo.textContent = element[attribute]; 
        newContactRow.appendChild(newContactInfo); 
    }
    contactOutput.appendChild(newContactRow)
});