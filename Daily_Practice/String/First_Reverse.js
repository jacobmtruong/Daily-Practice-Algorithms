// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) {
    let array = str.split(" ").reverse();
    let array1 = []
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split("").reverse().join("");
        array1.push(array[i]);
    }
    return array1.join(" ")
}

console.log(FirstReverse("Hello World and Coders"));