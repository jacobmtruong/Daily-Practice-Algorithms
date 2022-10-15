let arr = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3]

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) { // first loop iterating through every element in the array
        let min = i // set the minimum value for each iteration
        for (var j = i + 1; j < arr.length; j++) { // find the element that smaller than the minimum value (i)
            if (arr[j] < arr[min]) {
                min = j // set that to the new minimum value
            } 
        }
        if (min != i) {
            let temp = arr[i] // swap the elements
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr));