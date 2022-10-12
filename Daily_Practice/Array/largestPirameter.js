var largestPerimeter = function (nums) {
    nums = nums.sort()
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < (nums[i - 1] + nums[i - 2])) {
            return nums[i] + nums[i - 1] + nums[i - 2]
        } else {
            return 0
        }
    }
};