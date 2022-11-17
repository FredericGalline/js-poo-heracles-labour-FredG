// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");
const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);
let n = 0;

while (nemean.life > 0 && heracles.life > 0) {
  console.log("🕛 Round #" + n++);
  console.log(heracles.fight(nemean));
  console.log(nemean.fight(heracles));
}
