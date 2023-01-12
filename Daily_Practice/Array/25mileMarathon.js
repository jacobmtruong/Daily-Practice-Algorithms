// marathonDistance([1, 2, 3, 4]) ➞ false

// marathonDistance([1, 9, 5, 8, 2]) ➞ true

// marathonDistance([-6, 15, 4]) ➞ true

function marathon(arr) {
  let total = 0;
  for (const e of arr) {
    total += Math.abs(e);
  }
  return total >= 25 ? true : false;
}

console.log(marathon([1, 2, 3, 4]));
console.log(marathon([1, 9, 5, 8, 2]));
console.log(marathon([-6, 15, 4]));
