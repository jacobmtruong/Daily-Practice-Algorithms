

//on2
function numberInString1(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(Number.isInteger(parseInt(arr[i][j]))) {
                if(result.includes(arr[i])){
                    continue
                } else {
                    result.push(arr[i])
                }
            }
        }
    }
    return result
}

//o
function numberInString(arr) {
    let reg = /[1-9]/
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(numberInString(["1a", "a", "2b", "b"]));
console.log(numberInString(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numberInString1(["1a", "a", "2b", "b"]));
console.log(numberInString1(["abc", "ab10c", "a10bc", "bcd"]));



