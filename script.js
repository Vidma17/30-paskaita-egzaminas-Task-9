/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            console.log("Biudžeto:", cost.budget, "neužteks ir reikės didesnio:", true);
        } else {
            console.log("Biudžeto:", cost.budget, "užteks ir nereikės didesnio:", false);
        }
    }
}

let cost = new Movie("Mr. Robot", "Sam Esmail", 15000000000);
console.log(cost.wasExpensive());