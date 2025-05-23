// EXO 1

let paragraph = document.getElementById("message");
paragraph.textContent = "Bonjour tout le monde";

// EXO 2

// paragraph.style.color="red"; FIRST SOLUTION

paragraph.classList.toggle("red"); // SECOND SOLUTION

// EXO 3

let infoParagraphs = document.querySelectorAll(".info");

for (let i = 0; i < infoParagraphs.length; i++) {
    infoParagraphs[i].textContent = "Modifié"
}

// EXO 4

let List = document.querySelector("#liste");
let newListItem = document.createElement("li");
newListItem.textContent = "Élément ajouté";
List.append(newListItem);

// EXO 5

let removeText = document.querySelector("#a-supprimer");
removeText.remove();

// EXO 6

let fruits = ["pomme", "banane", "orange"];
let fruitsList = document.querySelector("#liste-fruits");

for (let fruit of fruits) {
    let fruitsListItem = document.createElement("li");
    fruitsListItem.textContent = fruit;
    fruitsList.append(fruitsListItem);
}

// EXO 7

let myList = document.querySelector("#myList");
let numbers = [3, 8, 12, 5, 2];
let listEvenNumber;

for (let number of numbers) {
    listEvenNumber = document.createElement("li");
    listEvenNumber.textContent = number;  
    console.log(listEvenNumber);
    if (number % 2 === 0) {     
        myList.append(listEvenNumber);
    }      
}

// EXO 8

let persons = ["alice", "bob", "claire"];
let personsList
let body = document.querySelector("body");

const afficherNomsMajuscules = () => {
    personsList = document.createElement("ul");
    personsList.classList.add("personsList");
    body.append(personsList);
    for (let person of persons) {
        let personsListItem = document.createElement("li");
        personsListItem.textContent = `${(person.charAt(0).toUpperCase())}${person.slice(1)}`;
        personsList.append(personsListItem);
    }
}
    afficherNomsMajuscules();

    // EXO 9

    