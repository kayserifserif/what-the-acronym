const text = document.querySelector(".text");
const button = document.querySelector(".generate");
const termsText = document.querySelector(".terms");

let terms;

loadData();

function loadData() {
  fetch("./terms.txt")
    .then(result => result.text())
    .then(text => {
      terms = text.split("\n");
      setup();
    });
}

function setup() {
  // populate terms list
  for (let term of terms) {
    let p = document.createElement("p");
    p.innerText = term;
    termsText.appendChild(p);
  }

  // initial generation
  generate();

  // generate on click
  button.addEventListener("click", generate);
}

function generate() {
  let str = "";
  let acronym = "";
  let numWords = Math.round(Math.random() + 3); // 3 or 4
  for (let i = 0; i < numWords; i++) {
    let term = terms[Math.floor(Math.random() * terms.length)];
    let words = term.split(" ");
    if (i < words.length) {
      // add word to string
      str += words[i] + " ";
      // add first letter of word to acronym
      acronym += words[i][0];
    }
  }
  text.innerText = acronym + "\n" + str;
}