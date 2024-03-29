const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
];

// *** FILTER ***

// 1. Get all characters with mass greater than 100
const massGreater100 = characters.filter((character) => character.mass > 100);
// console.log(massGreater100);

// 2. Get all character with height greater than 200
const heightGreater200 = characters.filter(
  (character) => character.height > 200
);
// console.log(heightGreater200);

// 3. Get all the male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
// console.log(maleCharacters);

// 4. Get all the female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
console.log(femaleCharacters);

// *** MAP ***

// 1. Get array pf all the names
const names = characters.map((character) => character.name);
// console.log(names);

// 2. Get array of all the heights
const heights = characters.map((character) => character.height);
// console.log(heights);

// 3. Get array of all objects included name and height
const namesandheight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
// console.log(namesandheight);

// 4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);

// *** SOME ***

// 1. At least one male character
const oneMale = characters.some((character) => character.gender === "male");
// console.log(oneMale);

// 2. At least one character with blue eye
const blueEye = characters.some((character) => character.eye_color === "blue");
// console.log(blueEye);

// 3. At least one character has a height taller than 200
const taller200 = characters.some((character) => character.height > 200);
// console.log(taller200);

// 4. At least one character has a mass less than 50
const massless50 = characters.some((character) => character.mass < 50);
console.log(massless50);

// *** SORT ***

// 1. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);

//2. Sort by mass
const byWeight = characters.sort((a, b) => a.mass - b.mass);
console.log(byWeight);

// 3. Sort by names
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
// console.log(byName);

// 4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log(byGender);

// *** EVERY ***

// 1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
// console.log(allBlueEyes);

// 2. Does every character have weight mass more 40
const weightMass40 = characters.every((character) => character.mass > 40);
// console.log(weightMass40);

// 3. Is every character shorter than 200
const shorterThan200 = characters.every((character) => character.height > 200);
// console.log(shorterThan200);

// 4. Is every character is male
const allMaleCharacters = characters.every(
  (character) => character.gender === "male"
);
// console.log(allMaleCharacters);
