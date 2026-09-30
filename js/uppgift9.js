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

   
       

for (let i = 0; i < people.length; i++) {
    console.log(`Namn: ${people[i].name} Ålder: ${people[i].age} Stad: ${people[i].city}`);

};

function Personinfo(name,city,age){   
    this.name = name;
    this.city = city;
    this.age = age;
    this.presetation = function() {
        console.log(`${this.name} bor i ${this.city} och är ${this.age}`);
        if (this.age < 18) {
    console.log("inte myndig");
}
else if (this.age >= 18) {
    console.log("myndig");
}
    };
}

let person1 = new Personinfo("Moa", "Hållsta", 31);
let person2 = new Personinfo("Elin", "Stockholm", 42);
let person3 = new Personinfo("Alicia", "Hägersten", 6);

person1.presetation();
person2.presetation();
person3.presetation();