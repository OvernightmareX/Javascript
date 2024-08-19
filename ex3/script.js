const coeff = 1/3; 

let r = prompt("Rayon : "); 
let h = prompt("Hauteur : "); 
let perimeter = Math.PI * Math.pow(parseInt(r),2); 
let result = coeff * perimeter * parseInt(h); 

alert("Volume = " + result); 