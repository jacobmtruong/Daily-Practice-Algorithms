Test.assertEquals(countLayers([
    "AAA"]), 1)
    
    Test.assertEquals(countLayers([
    "AAAA", 
    "AAAA", 
    "AAAA"]), 1)
    
    Test.assertEquals(countLayers([
    "AAAA", 
    "ABBA", 
    "AAAA"]), 2)
    
    Test.assertEquals(countLayers([
    "AAAAAAAAA", 
    "ABBBBBBBA", 
    "ABBBBBBBA", 
    "ABBBBBBBA", 
    "AAAAAAAAA"]), 2)


function countLayers(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        }
    }
    return Object.keys(obj).length
}


function countLayers1(arr) {
    let result = [... new Set(arr)]
    return result.length
}

console.log(countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ]));



console.log(countLayers1([0,0,0,2,2,3,3,3,4,5,6,6,6]));

