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

