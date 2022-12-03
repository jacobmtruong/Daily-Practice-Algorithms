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

const getPrices = (object) => {
    let prices = []
    for (let i = 0; i < object.length; i++) {
        prices.push(foods[i].price)
    }
    return prices
}

console.log(getPrices(foods));
// [3,4,2]


const getTotalPrice = (foods) => {
    let total = 0
    for (let i = 0; i < foods.length; i++) {
        total += foods[i].price
    }
    return total
}

console.log(getTotalPrice(foods));
// 10