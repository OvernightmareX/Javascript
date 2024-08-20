let sheetSize = Number(prompt("Entrer l'épaisseur de la feuille : ")); 
let totalWanted = Number(prompt("Entrer l'épaisseur souhaité : ")); 

let foldNumber = 0; 

let currentSize = sheetSize;

while (currentSize <= totalWanted){
    currentSize *= 2; 
    foldNumber++; 
}

alert("Pour arriver à une épaisseur de " + totalWanted + "mm, il faut plier la feuille " + foldNumber + " fois.")

currentSize = totalWanted;
foldNumber = 0; 
while (currentSize >= sheetSize){
    currentSize /= 2; 
    foldNumber++; 
}

alert("Pour arriver à une épaisseur de " + sheetSize + "mm, il faut déplier la feuille " + foldNumber + " fois.")

