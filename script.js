// de forskellige knapper og elementer på siden.
const giveUp = document.getElementById("giveUp");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const correctWord = document.getElementById("correctWord");
const attempts = document.getElementById("attempts");
const nytSpil = document.getElementById("nytSpil");
const gibberishElement = document.getElementById("gibberish");

// array med ord til spillet
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

// starter et nyt spil og blander det valgte ord
function startGame() {
  randomOrd = ord[Math.floor(Math.random() * ord.length)];

  let bogstaver = randomOrd.split("");

  bogstaver.sort(() => Math.random() - 0.5);

  let gibberish = bogstaver.join("");

  gibberishElement.textContent = gibberish;

  // nulstiller spillets forsøg og knapper
  forsøg = 0;
  attempts.textContent = "Forsøg: 0";
  correctWord.textContent = "";
  guessInput.value = "";
  guessButton.disabled = false;
  giveUp.disabled = false;

  console.log(`Nyt spil startet. Ordet er: ${randomOrd}`);
}

// afslutter spillet
function endGame() {
  guessButton.disabled = true;
  giveUp.disabled = true;
}

// spilleren gætter ordet
guessButton.addEventListener("click", () => {
  let gættetOrd = guessInput.value;

  console.log(`Spilleren gættede: ${gættetOrd}`);

  guessInput.value = "";

  forsøg++;

  attempts.textContent = `Forsøg: ${forsøg}`;

  if (gættetOrd.trim().toLowerCase() === randomOrd.toLowerCase()) {
    correctWord.textContent = `Rigtigt! Forsøg brugt ${forsøg}`;
    endGame();
  } else if (forsøg >= maxForsøg) {
    correctWord.textContent = `Du løb tør for forsøg! Ordet var: ${randomOrd}`;
    console.log("Spilleren løb tør for forsøg.");
    endGame();
  } else {
    correctWord.textContent = "Forkert! Prøv igen.";
  }
});

// spilleren giver op
giveUp.addEventListener("click", () => {
  correctWord.textContent = `Du gav op! Ordet var: ${randomOrd}`;

  console.log(`Spilleren gav op. Ordet var: ${randomOrd}`);

  endGame();
});

// starter et nyt spil
nytSpil.addEventListener("click", () => {
  startGame();
});

// starter spillet når siden åbnes
startGame();
