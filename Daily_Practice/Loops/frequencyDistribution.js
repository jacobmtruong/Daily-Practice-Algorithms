// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}


function getFrequencies(arr) {
	let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return obj
}




console.log(getFrequencies([1, 2, 3, 3, 2]));