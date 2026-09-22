// de forskellige knapper på siden.
const giveUp = document.getElementById("giveUp");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const correctWord = document.getElementById("correctWord");
const attempts = document.getElementById("attempts");
const newGame = document.getElementById("newGame");

//array med ord til spillet
const ord = [
  "Games",
  "MICA",
  "Computer Science",
  "Spiludvikler",
  "Girls Frontline",
  "Tololo",
  "SOPMOD II",
  "HK416",
  "Druid",
  "Forever",
];

let randomOrd;
let forsøg = 0;
let maxForsøg = 5;

function startGame() {
  // oprdene bliver blandet og vist.

  randomOrd = ord[Math.floor(Math.random() * ord.length)];

  let bogstaver = randomOrd.split("");

  bogstaver.sort(() => Math.random() - 0.5);

  let gibberish = bogstaver.join("");

  document.getElementById("gibberish").textContent = gibberish;

  forsøg = 0;
  attempts.textContent = "Forsøg: 0";
  correctWord.textContent = "";
  guessInput.value = "";
  guessButton.disabled = false;
}

//spilleren gætter ordet
guessButton.addEventListener("click", () => {
  let gættetOrd = guessInput.value;
  guessInput.value = "";

  forsøg++;

  attempts.textContent = `Forsøg: ${forsøg}`;

  if (gættetOrd.trim().toLowerCase() === randomOrd.toLowerCase()) {
    correctWord.textContent = `Rigtigt! Forsøg brugt ${forsøg}`;
    guessButton.disabled = true;
  } else if (forsøg >= maxForsøg) {
    correctWord.textContent = `Du løb tør for forsøg! Ordet var: ${randomOrd}`;
    guessButton.disabled = true;
  } else {
    correctWord.textContent = "Forkert! Prøv igen.";
  }
});

//spilleren trykker på knapper for at give op
giveUp.addEventListener("click", () => {
  correctWord.textContent = `Du gav op! Ordet var: ${randomOrd}`;
  guessButton.disabled = true;
});

//starter et nyt spil
newGame.addEventListener("click", () => {
  startGame();
});

//starter spillet når siden åbnes
startGame();
