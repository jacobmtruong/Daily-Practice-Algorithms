// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false


const validAnagram = (a, b) => {
    let s = a.split("")
    let t = b.split("")
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                t.splice(j, 1);
            }
        }
    }
    return t.length === 0
}


console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "cat"));
console.log(validAnagram("what", "twah"));
console.log(validAnagram("hapa", "tapa"));


