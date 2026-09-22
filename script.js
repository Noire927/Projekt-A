// de forskellige knapper på siden.
const giveUp = document.getElementById("giveUp");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const correctWord = document.getElementById("correctWord");
const attempts = document.getElementById("attempts");

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
// oprdene bliver blandet og vist.
let randomOrd = ord[Math.floor(Math.random() * ord.length)];
let bogstaver = randomOrd.split("");
bogstaver.sort(() => Math.random() - 0.5); // - 0.5 → gør tallet positivt eller negativt
let gibberish = bogstaver.join("");

console.log(gibberish);

document.getElementById("gibberish").textContent = gibberish;

guessButton.addEventListener("click", () => {
  let gættetOrd = guessInput.value;
});

//viser hvor mange forsøg spillerne har og hvor mange gange de har førsøgt.
let forsøg = 0;
let maxForsøg = 5;

guessButton.addEventListener("click", () => {
  let gættetOrd = guessInput.value;
  forsøg++;

  attempts.textContent = `Forsøg: ${forsøg}`;

  if (gættetOrd.trim().toLowerCase() === randomOrd.toLowerCase()) {
    correctWord.textContent = `Rigtigt! Forsøg brugt ${forsøg}`;
  } else {
    if (forsøg >= maxForsøg) {
      correctWord.textContent = `Du løb tør for forsøg! Ordet var: ${randomOrd}`;
    } else {
      correctWord.textContent = "Forkert! Prøv igen.";
    }
    if (forsøg >= maxForsøg) {
      correctWord.textContent = `Du løb tør for forsøg! Ordet var: ${randomOrd}`;
      guessButton.disabled = true;
    }
  }
});

//spilleren trykker på knapper for at give op
giveUp.addEventListener("click", () => {
  correctWord.textContent = `Du gav op! Ordet var: ${randomOrd}`;
});
