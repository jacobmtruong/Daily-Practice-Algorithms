// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]

function reverseArr(digits) {
  let arr = digits.toString().split("");
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join("");
}
console.log(reverseArr(232435435));
