// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
// Notes
// The list will never be empty (no empty object).


// function totalAmountAdjectives (obj) {
//     return Object.keys(obj).length;
// }


// second solution 

function totalAmountAdjectives (obj) {
    count = 0;
    for (let i in obj) {
        if (obj[i] != null) {
            count++;
        }
        else {
            continue
        }
    }
    return count;
}


console.log(totalAmountAdjectives({a: null, b: "scumbag", c: "moron", d: "dirtbag"}));
console.log(totalAmountAdjectives({a: null, b: null}));