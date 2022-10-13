// Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"

// fixImport("import randint from random") ➞ "from random import randint"

// fixImport("import pi from math") ➞ "from math import pi"
// Notes
// All Tests will be valid strings.


let text = "import pi from math"

function fixImport(txt) {
    let arr = txt.split(" ")
    let temp = arr[1]
    arr[1] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    return arr.join(" ")
}

console.log(fixImport(text));