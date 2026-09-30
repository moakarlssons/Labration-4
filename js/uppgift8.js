// Uppgift 8. Av Moa Karlsson 2026
"Use strict"


const book = {
    title: "Blackout",
    author: "Sofie Sarenbrant",
    year: 2026,

    
    bookinfo: function () {
        console.log(`Titel: ${this.title}`);
        console.log(`Författare: ${this.author}`);
        console.log(`År: ${this.year}`);
    }
};

book.bookinfo();

