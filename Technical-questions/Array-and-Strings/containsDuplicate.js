// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


const containsDuplicate = nums => {
    let arr = nums.sort();
    for (let i = 0; i < arr.length; i++) {
        return arr[i] === arr[i + 1] 
    }
}


const containsDuplicate2 = nums => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}


console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

console.log(containsDuplicate2([1,2,3,1]));
console.log(containsDuplicate2([1,2,3,4]));
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]));