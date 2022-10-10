// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.



function mergedArrays(...args) {
    let arr = [...args]
    // for (let i = 0; i < arr.length; i++) {
    //     arr.push[i]
    // }
    return arr.flat()
}

console.log(mergedArrays([1], [2], [3], [4], [5], [6], [7]));

