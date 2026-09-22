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

//viser hvor mange gane spilleren har førsøgt.
let forsøg = 0;

//spilleren skal nu gætte ordet.
let gættetOrd = prompt(`Gæt ordet: ${gibberish}`);
forsøg++;

//spilleren skal gætte ordet, hvis det er forkert, skal de prøve igen.
while (gættetOrd.toLowerCase() !== randomOrd.toLowerCase()) {
  gættetOrd = prompt(`Forkert! Prøv igen: ${gibberish}`);
  forsøg++;
}
//hvis rigtig så har spillerne vundet, ellers fortsætter spillet via "while" loopet
if (gættetOrd.toLowerCase() === randomOrd.toLowerCase()) {
  alert(`Tillykke! Du gættede ordet! forsøg brugt ${forsøg}`);
}
