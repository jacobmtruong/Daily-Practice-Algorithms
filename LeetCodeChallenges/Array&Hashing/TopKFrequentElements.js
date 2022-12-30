const topK = (nums, k) => {
  let hash = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] ? hash[nums[i]]++ : (hash[nums[i]] = 1);
  }
  for (let j = 0; j < Object.keys(hash).length; j++) {
    if (Object.values(hash)[j] >= k) {
      result.push(Object.keys(hash)[j]);
    }
  }
  return result;
};

console.log(topK([1, 1, 1, 2, 2, 3], 2));
