// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.


function toArrays (obj) {
    let array = Object.entries(obj);
    return array;
}

function toArrays1 (obj) {
    // console.log(Object.keys(obj));
    let array = Object.keys(obj).map((key) => [key, obj[key]]);
    return array
}

console.log(toArrays ({ a: 1, b: 2 }));
console.log(toArrays1 ({ a: 1, b: 2 }));