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
//1. Get array pf all the names
const names = characters.map((character) => character.name);
// console.log(names);
//2. Get array of all the heights
const heights = characters.map((character) => character.height);
console.log(heights);