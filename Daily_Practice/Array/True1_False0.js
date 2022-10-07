// True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 only.


function integerBoolean (str) {
    let array = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            array.push(false)
        } 
        else {
            array.push(true)
        }
    }
    return array
}

console.log(integerBoolean("010001010"));