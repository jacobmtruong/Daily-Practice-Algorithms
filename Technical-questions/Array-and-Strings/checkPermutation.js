//Given two strings, write a method to decide if one is permutation to the other

function isPermutation (a, b) {
    //Check if the two strings have the same length
    //If not, then it's not permutation FALSE
    if (a.length !== b.length) {
        return false;
    } else {
        //now check if the two strings by sort()
        let str1 = a.split('').sort().join('')
        let str2 = b.split('').sort().join('')
        // now we can check if the two strings is permutation of the other
        return str1 === str2
    }
}

console.log(isPermutation("aab", "abb"));