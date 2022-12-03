const list = {
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
}

console.log(Object.values(list));
// [ 'moron', 'scumbag', 'moron', 'idiot', 'idiot' ]

const getOccurances = (list) => {
    let values = Object.values(list);
    let object = {}
    for (let i = 0; i < values.length; i++) {
        if (object[values[i]] != null) {
            object[values[i]] += 1
        } else {
            object[values[i]] = 1
        }
    }
    return object
}

console.log(getOccurances(list));
// { moron: 2, scumbag: 1, idiot: 2 }