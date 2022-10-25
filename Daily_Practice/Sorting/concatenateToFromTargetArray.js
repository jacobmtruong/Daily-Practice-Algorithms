// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.

// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.

function canConcatenate(arr, target) {
    let flattedArray = arr.flat(Infinity).sort()
    if (flattedArray.length != target.length) {
        return false
    } else {
        return target.every((element) => flattedArray.includes(element))
    }
}

console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]));
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]));