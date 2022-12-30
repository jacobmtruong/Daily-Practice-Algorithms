var groupAnagrams = (strs) => {
  let hash = {};

  strs.forEach((str) => {
    let letters = str.split("").sort();

    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
    console.log(hash);
  });
  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
