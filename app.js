const pulls = [
  { name: "Common", chance: 50 },
  { name: "Uncommon", chance: 25 },
  { name: "Rare", chance: 15 },
  { name: "Epic", chance: 5 },
  { name: "Legendary", chance: 3.5 },
  { name: "Mythic", chance: 1.5 },
];

//array stuff

let pity = 0;
const softpity = 20;
const hardpity = 30;


function getNumb(max) {
  return Math.floor(Math.random() * max);
};

function rolling() {
  const x = getNumb(101);
  if (x >= 1 && x <= 50) {
    console.log("Common");
  }; 
};

rolling();
  

//Have a random number generator and if the number lands bewteen 1-50, have it display common. If 51-75, display uncommon. If 76-90, rare. ETC...
//FOR CHANCES

//Pity system (Hard/Soft)