// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
  let i = s.split("").sort();
  let j = t.split("").sort();
  if (i.length != t.length) {
    return "Not anagram";
  } else {
    return i.join() == j.join() ? "Is anagram" : "Not anagram";
  }
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
