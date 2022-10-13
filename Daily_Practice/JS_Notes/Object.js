let object = {
    name: 'Sam',
    age: '28'
}

//Get ALL the keys in the object and put them into an ARRAY
// Object.keys(object) // [ 'name', 'age' ]


//Get the object's keys and make them become a values for new key (name)
const objs = Object.keys(object)
    .map(name => ({
        name
    }))  //[ { name: 'name' }, { name: 'age' } ]


Object.entries(object) // [ [ 'name', 'Sam' ], [ 'age', '28' ] ]

 