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

//spilleren skal nu gætte ordet.
let gættetOrd = prompt(`Gæt ordet: ${gibberish}`);

if (gættetOrd.toLowerCase() === randomOrd.toLowerCase()) {
  alert("Tillykke! Du gættede ordet!");
} else {
  alert(`Desværre, det rigtige ord var: ${randomOrd}`);
}
