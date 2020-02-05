// Задание 1
let elem = document.getElementById("elem");
let first = elem.firstElementChild;
first.style.color = "red";
let last = elem.lastElementChild;
last.style.color = "red";
let child = elem.children;
for (i = 0; i < child.length; i++) {
  child[i].innerHTML += "!";
}
// Задание 2
let elem1 = document.getElementById("elem1");
elem1.previousElementSibling.innerHTML += "!";
elem1.nextElementSibling.innerHTML += "!";
let elem2 = document.getElementById("elem2");
let nextSibling = elem2.nextElementSibling;
nextSibling.nextElementSibling.innerHTML += "!";
// Задание 3
let elem3 = document.getElementById("elem3");
elem3.parentElement.style.color = "red";
let elem4 = document.getElementById("elem4");
let parent = elem4.parentElement;
parent.parentElement.style.color = "red";
