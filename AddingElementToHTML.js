const fruits = ["mango", "apple", "banana", "ananas", "papaya", "guava"];

document.body.appendChild(document.createElement("ul"));

var ul = document.querySelector("ul");

for (var i = 0; i < fruits.length; i++) {
    ul.appendChild(document.createElement("li"));
}

let a = ul.childNodes;

console.log(a);

for (var i = 0; i < fruits.length; i++) {
    a[i].textContent = fruits[i];
}
