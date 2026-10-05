// Uppgift 2. Av Moa Karlsson 2026
"use strict";

let productPrice = 200;
let productAmount = 5;
let productVat = 1.25;

console.log(`Pris: ${productPrice} kr`);
console.log(`Antal: ${productAmount}`);

let totalPrice = productPrice * productAmount;
console.log("Totalt: " + totalPrice + " kr");

let totalPriceVat = productPrice * productAmount * productVat;
console.log("Totalt inklusive moms: " + totalPriceVat + " kr");