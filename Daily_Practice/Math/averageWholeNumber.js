

function isAvgWhole(arr) {
    let average = arr.reduce((a,b) => a + b, 0)/arr.length
    return Number.isInteger(average)
}


console.log(isAvgWhole([3,1]))
console.log(isAvgWhole([3,1,1]))

