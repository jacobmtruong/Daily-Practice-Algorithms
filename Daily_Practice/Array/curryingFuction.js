



function multiply(arr) {
    return function (b) {
        return arr.map(index => index * b)
    }
}

console.log(multiply([3, 4, 5])(10));