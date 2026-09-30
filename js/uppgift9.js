// Uppgift 9. Av Moa Karlsson 2026
"use strict"

let people = [
    {
        name: "Moa",
        age: 31,
        city: "Hållsta"
    },
    {
        name: "Elin",
        age: 42,
        city: "Stockholm"
    },
    {
        name: "Alicia",
        age: 6,
        city: "Hägersten"
    }
];

function PrintPersonInformation(person) {
    let legalAge;
    if (person.age < 18){
        legalAge = "inte myndig";
    }
    else {
        legalAge = "myndig";
    }
    console.log(`${person.name} bor i ${person.city} och är ${legalAge}`)
}
       
for (let i = 0; i < people.length; i++) {
    PrintPersonInformation(people[i]);
};

