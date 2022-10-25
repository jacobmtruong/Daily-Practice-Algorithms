function simpleComp (arr1, arr2) {
    let arr = arr1.map((element) => element*element)
    return arr2.every((element) => arr.includes(element))
}

console.log(simpleComp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));