// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

const findIntersection = arr => {
    let strOne = arr[0].split(', ')
    let strTwo = arr[1].split(', ')
    console.log({strOne, strTwo});

    let newArr = []

    for (let i = 0; i < strOne.length; i++) {
        if (strTwo.includes(strOne[i])) {
            newArr.push(strOne[i])
        }        
    }
    
    if (newArr.length === 0) {
        return false
    } else {
        return newArr.toString()
    }
}

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));