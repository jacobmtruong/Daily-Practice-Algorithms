// The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null
// Notes
// All wines will be different prices, so there is no confusion in the ordering.


let wineList = [{name: "Wine A", price: 8.99}, 
                {name: "Wine 389", price: 109.99}, 
                {name: "Wine 44", price: 38.44}, 
                {name: "Wine 72", price: 22.77}]

let wineList1 = [{name: "Wine A", price: 8.99}]

let wineList2 = []

function chosenWine (wines) {
    if (wines.length === 0) {
        return null
    }

    if (wines.length === 1) {
        return Object.values(wines[0])[0]
    }

    let cheapest = Object.values(wines[0])[1] //8.99

    let second = []

    for (let i = 1; i < wines.length; i++) {
        if (Object.values(wines[i])[1] > cheapest) {
            second.push(Object.values(wines[i])[1]) // [109.99, 38.44, 22.77]
        }
    }

    let obj = wines.find(o => o.price === second.sort((a,b) => a-b)[0]) // {name: "Wine 72", price: 22.77}
    return obj.name
}

console.log(chosenWine(wineList));
console.log(chosenWine(wineList1));
console.log(chosenWine(wineList2));