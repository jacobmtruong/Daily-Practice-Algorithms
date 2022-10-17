function highestDigit(number) {
	let num = number.toString().split('')
    let max = num[0]
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i]
        }
    }
    return parseInt(max)
}

console.log(highestDigit(789));