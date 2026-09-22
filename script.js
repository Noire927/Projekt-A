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

let randomOrd = ord[Math.floor(Math.random() * ord.length)];
let bogstaver = randomOrd.split("");
bogstaver.sort(() => Math.random() - 0.5); // - 0.5 → gør tallet positivt eller negativt
