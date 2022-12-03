const foods = [
    {
        id: 1,
        name: 'Broccoli',
        price: 3
    },
    {
        id: 2,
        name: 'Carrot',
        price: 5
    },
    {
        id: 3,
        name: "Ginger",
        price: 2
    }
]

const getTotal = (object) => {
    let prices = []
    for (let i = 0; i < object.length; i++) {
        prices.push(foods[i].price)
    }
    return prices
}

console.log(getTotal(foods));
// [3,4,2]

