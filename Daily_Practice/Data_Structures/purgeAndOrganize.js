// input: [1, 4, 4, 4, 4, 4, 3, 2, 1, 2]
// output: [ 1, 2, 3, 4 ]



function purgeAndOrganize(arr) {
    let newArray = [... new Set(arr)].sort((a, b) => a - b);
    return newArray
}


// hashMap
function purgeAndOrganizeMap (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        }
    }
    let newArray = Object.keys(obj).sort((a,b) => a - b)
    let arr1 = []
    for (let i = 0; i < newArray.length; i++) {
        arr1.push(parseInt(newArray[i]))
    }
    return arr1
}



console.log(purgeAndOrganize([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));

console.log(purgeAndOrganizeMap([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));