const pulls = [
  { name: "Common", chance: 50 },
  { name: "Uncommon", chance: 25 },
  { name: "Rare", chance: 15 },
  { name: "Epic", chance: 5 },
  { name: "Legendary", chance: 3 },
  { name: "Mythic", chance: 2 },
];

//array stuff
function gambling() {
let input = console.log("Do you wish to roll?")

let ifTrue;

if (input === "yes"){
  ifTrue = true;
} else if (input === "no"){
  ifTrue = false
};

if (ifTrue === true) {
function getNumb(max) {
  return Math.floor(Math.random() * max);
};

function rolling() {
  const x = getNumb(101);
  if (x >= 1 && x <= 50) {
    console.log("Common");
  }; 
  if (x >= 51 && x <= 75) {
    console.log("Uncommon");
  };
  if (x >= 76 && x <= 90) {
    console.log("Rare");
  };
  if (x >= 91 && x <= 95) {
    console.log("Epic");
  };
  if (x >= 96 && x <= 98) {
    console.log("Legendary");
  };
  if (x >= 99 && x <= 100) {
    console.log("Mythic");
  };
};

rolling();


//Have a random number generator and if the number lands bewteen 1-50, have it display common. If 51-75, display uncommon. If 76-90, rare. ETC...
//FOR CHANCES

let pity = 0;
const guaranteedpity = 10;

function pitycounter () {}

} else if (ifTrue === false){
  return
};
};

gambling();

//Pity system (Hard/Soft)