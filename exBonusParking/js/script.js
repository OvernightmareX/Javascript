import { Ticket } from "./class/ticket.js";

function isVehiculeParked(immat){
    let isParked=false; 
    parking.forEach((ticket) => {
        if(ticket.immat == immat)
            isParked = true; 
    });
    return isParked; 
}

function display(toHide, color=null, message=null){
    if(!toHide){
        infoDisplay.classList = "mb-2 p-4 border-rounded text-center";
        infoDisplay.classList.add(color);    
        infoDisplay.textContent = message;    
    }
    else
        infoDisplay.classList.add("hidden");    
}

let parking = []; 
const inputImmat = document.getElementById("immatriculation"); 
const infoDisplay = document.getElementById("display"); 
const timeCoeff = 1; // 60 pour les minutes

document.getElementById("ticketButton").addEventListener("click", () => {
    if(inputImmat.value == "")
        return; 
    
    if(isVehiculeParked(inputImmat.value)){
        display(false, "red", `Le véhicule ${inputImmat.value} existe déjà !`); 
        return; 
    }

    parking.push(new Ticket(inputImmat.value, new Date()));

    display(false, "green", `Veuillez prendre votre ticket pour le véhicule ${inputImmat.value}.`); 
});

document.getElementById("payButton").addEventListener("click", () => {
    if(inputImmat.value == "")
        return; 
    
    if(!isVehiculeParked(inputImmat.value)){
        display(false, "red", `Le véhicule ${inputImmat.value} n'existe pas !`); 
        return; 
    }

    let vehicule = parking.find((ticket) => ticket.immat === inputImmat.value); 
    let now = new Date(); 
    let ticketDuration = (now - vehicule.startDate) / 1000; 
    let price = 0;

    parking.splice(parking.indexOf(vehicule), 1); 

    if(ticketDuration <= 15 * timeCoeff)
        price = 0.8; 
    else if(ticketDuration > 15 * timeCoeff && ticketDuration <= 30 * timeCoeff)
        price = 1.30; 
    else if(ticketDuration > 30 * timeCoeff && ticketDuration <= 45 * timeCoeff)
        price = 1.70; 
    else 
        price = 6; 

    display(false, "orange", `Le prix a payer pour le véhicule ${inputImmat.value} est de ${price}€.`); 
});