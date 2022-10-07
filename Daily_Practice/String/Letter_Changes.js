// Letter Changes
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


function LetterChanges(str) { 
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let vowels = ["u","e","o","a","i"]
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (str[i] == alphabet[j]) {
                str[i] = alphabet [j+1]
                if (vowels.includes(alphabet[j+1])) {
                    newstr += alphabet[j+1].toUpperCase()
                }
                else {
                    newstr += alphabet[j+1]
                }
            }
            if (str[i] != alphabet[j]){
                continue
            }
        }
    }
    return newstr; 
}

console.log(LetterChanges("hello*3"));