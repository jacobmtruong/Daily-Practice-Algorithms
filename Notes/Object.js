const object1 = {
    a: 'somthing', 
    b: 12 
}



Object.entries(object1)  // [["a", "somthing"], ["b", 12]]
Object.keys(object1)     // ["a", "b"]
Object.values(object1)   // ["somthing", 12]
Object.is('something', 'something') // true
Object.getOwnPropertyNames(object1) // [a, b]



const person = {
    name: 'Dom'
}

// ============ .assign() ============
const newPerson = Object.assign({}, person, {
    name: 'Jeff',
    age: 29
})

// Also we can use spread operator fro modern code

const newPerson1 = {...person, ... {
    name: 'John',
    age: 24
}}
 
//console.log(newPerson);   //{ name: 'Jeff', age: 29 }
//console.log(person);      // { name: 'Dom' }
//console.log(newPerson1);  // { name: 'John', age: 24 }



// ============ .defineProperty() ============
const person1 = {}

Object.defineProperty(person1, "date", {
    get() {
        return new Date();
    }
})


Object.defineProperty(person1, "name", {
    value: 'John'
})

//console.log(person1.date);  //2022-12-03T18:28:55.074Z
//console.log(person1.name);  //John



// ============ .entries() ============

const phone = {
    brand: 'Nokia',
    model: 'N65'
}

Object.entries(phone) //[ [ 'brand', 'Nokia' ], [ 'model', 'N65' ] ]



// ============ .fromEntries() ============

const phoneArray = [ [ 'brand', 'Nokia' ], [ 'model', 'N65' ] ]

Object.fromEntries(phoneArray)  // { brand: 'Nokia', model: 'N65' }


// ============ .freeze() ============ CANNOT ALTER THE OBJECT ANYMORE (ADD, EDIT, DELETE)

const person2 = {
    name: 'John',
    age: 34
}

Object.freeze(person2)

delete person2.age

//console.log(person2)    //{ name: 'John', age: 34 }

