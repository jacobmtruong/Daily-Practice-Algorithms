// Test.assertEquals(numbersSum([1, 2, "13", "4", "645"]), 3)
// Test.assertEquals(numbersSum([true, false, "123", "75"]), 0)
// Test.assertEquals(numbersSum([1, 2, 3, 4, 5, true]), 15)
// Test.assertEquals(numbersSum(["abcd", 1234, false, true, 564, "hii"]), 1798)
// Test.assertEquals(numbersSum(["abcd", "abc45", "assssd", true]), 0)
// Test.assertEquals(numbersSum([]), 0)
// Test.assertEquals(numbersSum(["cghyki", "cd", 12114, 786, true, "me", "bey"]), 12900)


function numberElement (arr) {
    let sum = 0
    for (let element of arr) {
        if (Number.isInteger(element)) {
            sum += element
        }
    }
    return sum
}


console.log(numberElement([1, 2, "13", "4", "645"]));