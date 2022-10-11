// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1


function num_of_digits(num) {
    let text = num.toString();
    let count = 0;
    let array = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < text.length; i++) {
        if (array.includes(text[i])) {
            count++
        }
        else {
            count - 1
        }
    } 
    return count
}

// solution 2

function num_of_digits_2(num) {
    return Math.abs(num).toString().length;
}


console.log(num_of_digits_2(-108865219));



