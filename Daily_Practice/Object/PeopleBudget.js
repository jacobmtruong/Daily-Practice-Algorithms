let people = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

const getBudget = (list) => {
    let total = 0
    for (let i = 0; i < list.length; i++) {
        total += list[i].budget
    }
    return total
}

console.log(getBudget(people));