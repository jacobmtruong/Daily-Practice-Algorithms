const object1 = {
    a: 'somthing', 
    b: 12 
}



Object.entries(object1)  // [["a", "somthing"], ["b", 12]]
Object.keys(object1)     // ["a", "b"]
Object.values(object1)   // ["somthing", 12]
Object.is('something', 'something') // true
Object.getOwnPropertyNames(object1) // [a, b]






// for (const [key, value] of Object.entries(object1)){
//     console.log(`${key}: ${value}`);
// }
 