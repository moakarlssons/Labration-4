 // Uppgift 7. Av Moa Karlsson 2026

 "use strict"

function countSumInArray(array){
    let arraySum = 0;

    for (let i = 0; i < array.length; i++) {
        arraySum = arraySum + array[i];
    }

    return arraySum;
}

let numbers = [1, 15, 35, 8, 26, 45]; 

console.log("Summan är " + countSumInArray(numbers));
