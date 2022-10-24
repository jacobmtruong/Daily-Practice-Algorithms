function countAnimals(str) {
    animals = ["dog", "cat", "bat", "cock", "cow", "pig",
        "fox", "ant", "bird", "lion", "wolf", "deer", "bear",
        "frog", "hen", "mole", "duck", "goat"]
    let array = str.split("")
    for (let el of animals) {
        let animal = el.split("")
        for (let i = 0; i < array.length; i++) {
            if(animal.includes(array[i])) {
                console.log(array.splice(i,1))

            }
        }
    }
    return array
}

console.log(countAnimals("cockdogwdufrbir"));

console.log(Math.abs("03.1400"));