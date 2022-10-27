// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function toBoolArray(word) {
	let wordArray = word.split('')
    let result = []
    for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (wordArray[i] === alphabet[j]) {
                if (j%2 === 0) {
                    result.push(true)
                } else {
                    result.push(false)
                }
            }
        }
    }
    return result
}

console.log(toBoolArray("deep"));
console.log(toBoolArray("loves"));
