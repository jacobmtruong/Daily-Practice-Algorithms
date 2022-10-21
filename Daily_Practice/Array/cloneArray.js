// input: [1,1]
//output: [1,1, [1,1]]


function cloneArray(arr) {
    return [...arr, arr]
}

console.log(cloneArray([1,1]));