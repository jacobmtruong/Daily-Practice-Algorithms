// input: [1, 4, 4, 4, 4, 4, 3, 2, 1, 2]
// output: [ 1, 2, 3, 4 ]



function purgeAndOrganize(arr) {
    let newArray = [... new Set(arr)].sort((a, b) => a - b);
    return newArray
}

console.log(purgeAndOrganize([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));