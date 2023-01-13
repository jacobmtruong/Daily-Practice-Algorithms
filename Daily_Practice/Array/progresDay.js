// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9])  ➞ 0

function progressDays(records) {
  let count = 0;
  for (let i = 0; i < records.length; i++) {
    if (records[i + 1] > records[i]) {
      count++;
    }
  }
  return count;
}

console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));
