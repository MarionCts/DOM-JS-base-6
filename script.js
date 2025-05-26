// EXO 1

let paragraph = document.getElementById("message");
paragraph.textContent = "Bonjour tout le monde";

// EXO 2

// paragraph.style.color="red"; FIRST SOLUTION

paragraph.classList.toggle("red"); // SECOND SOLUTION

// EXO 3

let infoParagraphs = document.querySelectorAll(".info");

for (let i = 0; i < infoParagraphs.length; i++) {
  infoParagraphs[i].textContent = "Modifié";
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
let personsList;
let body = document.querySelector("body");

const afficherNomsMajuscules = () => {
  personsList = document.createElement("ul");
  personsList.classList.add("personsList");
  body.append(personsList);
  for (let person of persons) {
    let personsListItem = document.createElement("li");
    personsListItem.textContent = `${person
      .charAt(0)
      .toUpperCase()}${person.slice(1)}`;
    personsList.append(personsListItem);
  }
};
afficherNomsMajuscules();

// EXO 9

let products = [
  { nom: "Stylo", prix: 1.5 },
  { nom: "Cahier", prix: 3 },
  { nom: "Gomme", prix: 0.8 },
];

let tableProducts;

const creerTable = () => {
  tableProducts = document.createElement("table");
  body.append(tableProducts);

  let tHead = document.createElement("thead");
  let tBody = document.createElement("tbody");
  let thRow = document.createElement("tr");

  console.log(products[0].nom);
  console.log(Object.keys(products[0])[0]);

  // The first row of the table shows the object keys "name" and "price"
  let thName = document.createElement("th");
  let thPrice = document.createElement("th");
  thName.textContent = `${Object.keys(products[0])[0]}`;
  thPrice.textContent = `${Object.keys(products[0])[1]}`;
  tableProducts.append(tHead); // Pushes a <thead> element in the <table>
  tableProducts.append(tBody); // Pushes a <tbody> element in the <table>
  tHead.append(thRow); // Pushes a <tr> element in the <thead>
  thRow.append(thName, thPrice); // Pushes <th> elements in the <tr> of <thead>

  for (let i = 0; i < products.length; i++) {
    let tbRow = document.createElement("tr");
    tBody.append(tbRow); // Pushes a <tr> element in the <tbody>
    let tdNameValue = document.createElement("td");
    let tdPriceValue = document.createElement("td");
    tdNameValue.textContent = `${products[i].nom}`;
    tdPriceValue.textContent = `${products[i].prix}`;
    tbRow.append(tdNameValue); //Creates a <td> element with the value of "name" in the <tr> of the <tbody>
    tbRow.append(tdPriceValue); //Creates a <td> element with the value of "price" in the <tr> of the <tbody>
  }
};
creerTable();

// EXO 10

const expensiveProductsTitle = document.createElement("h3");
expensiveProductsTitle.textContent = "Liste des produits supérieurs à 1€"
body.append(expensiveProductsTitle);

const expensiveProducts = document.createElement("ul");
body.append(expensiveProducts);

const detectExpensive = () => {
  for (let product of products) {
    if (product.prix > 1) {
      console.log(product.prix);
      let expensiveProduct = document.createElement("li");
      expensiveProduct.textContent = product.nom;
      expensiveProducts.append(expensiveProduct);
    }
  }
}

detectExpensive();

// EXO 11

let ages = [5, 18, 25, 15, 30];

const underAgeListTitle = document.createElement("h3");
underAgeListTitle.textContent = "Liste des personnes en fonction de leur âge";
body.append(underAgeListTitle);

const underAgeList = document.createElement("ul");
body.append(underAgeList);

for (let user of ages) {
 let underAgeUser = document.createElement("li");
 if (user < 18) {
  underAgeUser.textContent = `Mineur`;
 } else {
  underAgeUser.textContent = `Majeur`;
 }
 underAgeList.append(underAgeUser);
}

// EXO 12

let books = [
  {titre: "Livre A", categorie: "Roman"},
  {titre: "Livre B", categorie: "Poésie"},
  {titre: "Livre C", categorie: "Roman"}
]

const detectKind = (title) => {
  const bookKindTitle = document.createElement("h3");
  bookKindTitle.textContent = `${title}`;
  body.append(bookKindTitle);

  const bookKind = document.createElement("ul");
  body.append(bookKind);

  for (let book of books) {
    if (book.categorie === title) {
      let particularBook = document.createElement("li");
      particularBook.textContent = `${book.titre}`;
      bookKind.append(particularBook);
      
    }
  }
}

detectKind("Roman");
detectKind("Poésie");