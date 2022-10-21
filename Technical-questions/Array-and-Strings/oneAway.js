// pale, ple -> true
// pales, pale -> true
// pale, bake -> false

function oneAway(word, compare) {
    let wordLength = word.length
    let count = 0
    for (let i = 0; i < wordLength; i++) {
        for (let j = 0; j < compare.length; j++) {
            if (word[i] === compare[j]) {
                count++
            }
        }
    }
    return count === (wordLength - 1)
}


function checkOneDifferent(word, compare) {
    if (word.length !== compare.length) {
        return false
    } else {
        let mulligan = false
        fP = 0
        sP = 0 
        while (fP < word.length) {
            if (word[fP] !== compare[sP]) {
                if (mulligan) {
                    return false
                } else {
                    mulligan = true
                }
            }
            fP++
            sP++
        }
    }
    return true
}



console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(checkOneDifferent("pale", "bake"));