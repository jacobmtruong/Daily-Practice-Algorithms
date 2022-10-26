// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false


function testJackpot(arr) {
    let value = [... new Set(arr)]
    return value.length === 1
}

console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));