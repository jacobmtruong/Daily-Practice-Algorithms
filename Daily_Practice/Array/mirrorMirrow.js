// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

function mirror(arr) {
  let newArr = [...arr].sort((a, b) => b - a);
  newArr.shift();
  return arr.concat(newArr);
}

console.log(mirror([0, 2, 4, 6]));
