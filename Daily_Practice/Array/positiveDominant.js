// Positive Dominant

// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.z

// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).



function isPositiveDominant(arr) {
    let a = [... new Set(arr)]
	let positive = 0 , negative = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            positive++
        }
        else if (a[i] < 0) {
            negative++
        }
    }
    return positive > negative? true : false
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4, -3, -4]));

