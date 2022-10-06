// Return the Most Expensive Piece of Jewellery
// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"
// Notes
// There will always be at least one item in the object.
// There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).


let most = ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
})

// function mostExpensive(obj) {
//     const max = Math.max(...Object.values(obj))
//     for (const key in obj)
//           if (obj[key] === max)
//               return 'The most expensive one is the ' + key
// }

function mostExpensive(obj) {
    let max = Object.values(obj)[0] //980
    for (let i = 1; i < Object.keys(obj).length; i++) {
        if (Object.values(obj)[i] > max) {
            max = Object.values(obj)[i]; // max = 4650
        }
    }
    return `The most expensive item is the ${Object.keys(obj).find(key => obj[key] === max)}`
}

console.log(mostExpensive(most));
