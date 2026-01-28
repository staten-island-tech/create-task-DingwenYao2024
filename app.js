const pulls = [
  { name: "Common", chance: 50 },
  { name: "Uncommon", chance: 25 },
  { name: "Rare", chance: 15 },
  { name: "Epic", chance: 5 },
  { name: "Legendary", chance: 3.5 },
  { name: "Mythic", chance: 1.5 },
];

let pity = 0;
const softpity = 20;
const hardpity = 30;

//array stuff
//have the function give a random rarity from the array
//give each rarity its own chance percentage of obtaining itd