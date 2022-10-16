// Implement an algorithm to determine if a string has all unique characters.

const str = 'abcda'


//On2
function isUniqueString(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false
            }
        }
    }
    return true
} 


//hashMap
function isUniqueHashMap(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        if(obj[string[i]] && obj[string[i]] >= 1){
            return false
        } else {
            obj[string[i]] = 1
        }
    }
    return true
}

console.log(isUniqueString(str));
console.log(isUniqueHashMap(str));