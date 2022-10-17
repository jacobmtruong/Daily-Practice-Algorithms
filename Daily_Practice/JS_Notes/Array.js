// ----- STRING -----

let string = [
    'zack',
    'bob',
    'sally'
]


// sort array by alphabetical order 
const sortedStringArray = string.sort() // [ 'bob', 'sally', 'zack' ]

const sortedStringArray1 = string.sort((a, b) => {
    return a.localeCompare(b) // "-" sort it backwards
})  // [ 'zack', 'sally', 'bob' ]

// Convert array of objects to Object
let arrayObject = [
    ["name", "bob"],
    ["age", 20]
]

Object.fromEntries(arrayObject) // { name: 'bob', age: 20 }


// ---- NUMBER -----

let number = [1, 2, 3, 5, 4, 6, 2, 4]

// Map will take each value in a index of the array and return a new values 
// Only use map if you want to return a new array with new values
const numberArray1 = number.map(index => index * 2)


//Get sum of the array
let sum = number.reduce((x,y) => x + y) //return 17

//shuffle elements in array
let shuffledArray = number.sort((a, b) => 0.5 - Math.random())

//filter for unique values
const filterUniqueValues = [...new Set(number)] // return [1,2,3,4,5,6]

