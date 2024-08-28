function isVehiculeParked(immat){
    let isParked = parking.getItem(immat) != null;
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

let parking = localStorage; 
let history = []; 

const inputImmat = document.getElementById("immatriculation"); 
const infoDisplay = document.getElementById("display"); 
const inputFindImmat = document.getElementById("findImmat"); 

const inputDateStart = document.getElementById("findDateStart"); 
const inputDateEnd = document.getElementById("findDateEnd"); 
const timeCoeff = 1; // 60 pour les minutes

document.getElementById("ticketButton").addEventListener("click", () => {
    const immat = inputImmat.value; 

    if(immat == "" || null)
        return; 
    
    if(isVehiculeParked(immat)){
        display(false, "red", `Le véhicule ${immat} existe déjà !`); 
        return; 
    }

    let checkIn = new Date(); 
    let checkOut = null;
    let entry = {immat, checkIn, checkOut}
    parking.setItem(immat, checkIn.getTime());
    history.push(entry); 

    display(false, "green", `Veuillez prendre votre ticket pour le véhicule ${immat}.`); 
});

document.getElementById("payButton").addEventListener("click", () => {
    const immat = inputImmat.value; 
    
    if(immat == "" || null)
        return; 
    
    if(!isVehiculeParked(immat)){
        display(false, "red", `Le véhicule ${immat} n'existe pas !`); 
        return; 
    }

    let startDate = parking.getItem(immat); 
    let now = new Date(); 
    let ticketDuration = (now - startDate) / 1000; 
    let price = 0;

    let vehiculeToCheckOut = history.findLast((element) => element.immat == immat).checkOut = now;
    vehiculeToCheckOut.checkOut = now;

    parking.removeItem(immat); 

    if(ticketDuration <= 15 * timeCoeff)
        price = 0.8; 
    else if(ticketDuration > 15 * timeCoeff && ticketDuration <= 30 * timeCoeff)
        price = 1.30; 
    else if(ticketDuration > 30 * timeCoeff && ticketDuration <= 45 * timeCoeff)
        price = 1.70; 
    else 
        price = 6; 

    display(false, "orange", `Le prix a payer pour le véhicule ${immat} est de ${price}€.`); 
});

document.getElementById("checkImmatBtn").addEventListener("click", () => {
    if(inputFindImmat.value == "" || null)
        return; 

    let historyFiltered = []; 

    history.forEach(element => {
        if(element.immat == inputFindImmat.value)
            historyFiltered.push(element); 
    });

    console.table(historyFiltered);
}); 

document.getElementById("checkDateBtn").addEventListener("click", () => {
    console.log(inputDateStart.value); 
    console.log(inputDateEnd.value); 

    if(inputDateStart.value == "" || null)
        return; 

    let historyFiltered = []; 

    let endDate = inputDateEnd.value == "" || null ? null : inputDateStart.toDateString();  

    history.forEach((element) => {
        if(element.checkIn.toDateString() == inputDateStart.toDateString() 
            && element.checkOut.toDateString() == endDate)
            historyFiltered.push(element);
    }); 
    
    console.table(historyFiltered);
}); 