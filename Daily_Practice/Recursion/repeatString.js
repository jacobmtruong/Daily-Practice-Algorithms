//input: 'ab', 3
//output: 'ababab'

function repeatString(txt, n) {
    if (n < 0) {
        return ""
    }
    if (n === 1) {
        return txt
    }
    return txt + repeatString(txt, n - 1)
}

console.log(repeatString("ab", 3));