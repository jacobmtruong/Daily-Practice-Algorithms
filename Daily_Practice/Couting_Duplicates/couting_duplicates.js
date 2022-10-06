
function duplicateCount(text){
    let lowertext = text.toLowerCase();
    let map = {}
    let count = 0;
    for (let i = 0; i < lowertext.length; i++) {
        if (map[lowertext[i]] != null) {
            map[lowertext[i]] += 1
        }
        else {
            map[lowertext[i]] = 1
        }
    }
    for (let key in map) {
        if (map[key] > 1) {
            count++
        }
    }
    return count
}



console.log(duplicateCount("AVERHhjye"));


console.log(duplicateCount("aDDEGFSassd1124"));