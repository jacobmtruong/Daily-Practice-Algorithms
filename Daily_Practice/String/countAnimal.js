
const animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]


function countAnimals(str) {
    let array = str.split("")
    console.log(array);
    for (let el of animals) {
        let animal = el.split("")
        console.log(animal);
        for (let i = 0; i < array.length; i++) {
            if (animal.includes(array[i])) {
                array.splice(i, 1)
                console.log(array);
            }
        }
    }
    return array
}

console.log(countAnimals("goatcode"));

// console.log(
// ['o','d','g'].includes('g','d','e')
// );