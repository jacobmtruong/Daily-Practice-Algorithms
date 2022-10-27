let vowels = ['u','e','o','a','i']

function findingVowels(word) {
    let count = 0
    let wordArray = word.split('')
    for ( let i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i])) {
            count++
        }
    }
    return count
}


function withRegex(str) {
    let reg = /[ueaoiUEOAI]/g
    return str.match(reg).length
}

console.log(findingVowels("celebrate"));
console.log(withRegex("celebrate"));