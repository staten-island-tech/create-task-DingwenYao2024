const pulls = [
  { name: "Common", chance: 50 },
  { name: "Uncommon", chance: 25 },
  { name: "Rare", chance: 15 },
  { name: "Epic", chance: 5 },
  { name: "Legendary", chance: 3 },
  { name: "Mythic", chance: 2 },
];

//array stuff

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumb(max) {
  return Math.floor(Math.random() * max);
}

function rolling() {
  const x = getNumb(101);
  if (x <= 50) return "Common";
  if (x <= 75) return "Uncommon";
  if (x <= 90) return "Rare";
  if (x <= 95) return "Epic";
  if (x <= 98) return "Legendary";
  return "Mythic";
}

let pity = 0;
const guaranteedPity = 10;

function rollPity() {
  pity++;
  const result = rolling();
  if (result === "Mythic" || pity >= guaranteedPity) {
    pity = 0;
    return "Mythic (Pity)";
  }
  return result;
}

function doYouRoll() {
  readline.question("Do you wish to roll? (yes/no) ", input => {
    const answer = input.toLowerCase().trim();

    if (answer === "yes") {
      const outcome = rollPity();
      console.log(outcome);
      doYouRoll();
    } else if (answer === "no") {
      console.log("See ya");
      readline.close();
    } else {
      console.log("Please answer yes or no.");
      doYouRoll();
    }
  });
}

doYouRoll();