// Uppgift 2. Av Moa Karlsson 2026
"use strict";

let productPrice = 200;
let productAmount = 5;
let productVat = 1.25;

console.log(`Pris: ${productPrice} kr`);
console.log(`Antal: ${productAmount}`);
console.log("Totalt: " + productPrice *productAmount + " kr");
console.log("Totalt inklusive moms: " + productPrice*productAmount*productVat + " kr");