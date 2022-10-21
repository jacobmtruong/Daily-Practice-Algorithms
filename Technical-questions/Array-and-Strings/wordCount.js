// input: "one fish two fish red fish blue fish"
// output: {
//           one: 1,
//           fish: 4,
//           two: 1,
//           red: 1,
//           blue: 1
//         };



const wordCount = str => {
    let arr = str.split(/^[a-z](?:_?[a-z]+)*$/i)
    let obj = {}
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return obj
}

console.log(wordCount("one fish two fish red fish blue fish"));