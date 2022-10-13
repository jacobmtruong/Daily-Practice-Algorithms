// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(cap) {
    let arr = cap.split('')
    let capArr = []
    const re = /[A-Z]/g
    for (let i = 0; i < arr.length; i++) {
        if (re.test(arr[i])) {
            capArr.push(arr[i])
            arr.splice(i, 1)
            i-=2
        }
    }
    return arr
}

// (capArr.join('')) + arr.join('')

console.log(capToFront("moveMENT"));