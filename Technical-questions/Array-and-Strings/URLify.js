// input: 'Mr John Smith     '
// output: 'Mr%20John%20Smith'


function URLify(str) {
    let arr = str.trim().split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            arr[i] = '%20'
        }
    }
    return arr.join('')
}

console.log(URLify('Mr John Smith     '));
