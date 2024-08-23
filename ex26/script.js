function updateSelect(){
    const selectDogs = document.getElementById("dog-select"); 
    selectDogs.innerHTML = ""; 

    const defaultOption = document.createElement("option");
    defaultOption.value = 0; 
    defaultOption.textContent = "Sélectionnez un chien"; 
    selectDogs.appendChild(defaultOption);

    for(let i = 1; i <= dogs.length; i++){
        const newDog = document.createElement("option");
        newDog.value = i; 
        newDog.textContent = dogs[i-1].name; 
        selectDogs.appendChild(newDog); 
    }
}

function addDog(dogs){
    const name= document.getElementById("dog-name").value; 
    const breed= document.getElementById("dog-breed").value; 
    const age= document.getElementById("dog-age").value;
    dogs.push({name, breed, age});
}

function displayDog(dogs, value){
    let output = document.getElementById("selectOutput");

    if(value != 0){
        output.innerHTML = "Vous avez sélectionné le chien avec l'ID " + value + "<br>";
        output.innerHTML += "Son nom est " +  dogs[value-1].name + "<br>"; 
        output.innerHTML += "Sa race est " +  dogs[value-1].race + "<br>"; 
        output.innerHTML += "Son age est " +  dogs[value-1].age + "<br>"; 
    }
    else
        output.textContent = "";

}

let dogs = [{
    name: "test",
    race: "race test",
    age: "age"
},{
    name: "test2",
    race: "race test2",
    age: "age2"
}];

updateSelect(); 
let select = document.getElementById("dog-select"); 

document.getElementById("btn-submit").addEventListener("click",() => {
    addDog(dogs); 
    updateSelect(); 
})

select.addEventListener("change",() => {
    displayDog(dogs, select.value);
})