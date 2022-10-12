// C*ns*r*d Str*ngs
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

// uncensor("abcd", "") ➞ "abcd"

// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
// Notes
// The vowels are given in the correct order.
// The number of vowels will match the number of * characters in the censored string.


function uncensor(string, vowels) {
    string = string.split("");
    vowels = vowels.split("");
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "*") {
            string.splice(i, 1, vowels[0]);
            // string.replace(string[i], vowels[0])
            vowels.shift()
        }
    }
    return string.join('')
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));


let array = [
    'W', 'h', '*', 'r', '*',
    ' ', 'd', '*', 'd', ' ',
    'm', 'y', ' ', 'v', '*',
    'w', '*', 'l', 's', ' ',
    'g', '*', '?'
  ]

console.log(array.splice(2,1, "what"));

console.log(array);