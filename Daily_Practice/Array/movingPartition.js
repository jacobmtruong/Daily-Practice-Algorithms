// movingPartition([-1, -1, -1, -1])
// ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// movingPartition([1, 2, 3, 4, 5])
// ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// movingPartition([]) ➞ []


function movingPartition (arr) {
    let array = [];
    for (let i = 1; i < arr.length; i++)
        array.push([arr.slice(0, i), arr.slice(i)]);
    return array
}

console.log(movingPartition([-1, -1, -1, -1]));