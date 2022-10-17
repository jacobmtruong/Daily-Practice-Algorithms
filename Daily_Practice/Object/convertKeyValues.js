let objectToArray = {
    D: 1,
    B: 2,
    C: 3
}


function convertToArray(object) {
    return Object.entries(object)
}

console.log(convertToArray(objectToArray));