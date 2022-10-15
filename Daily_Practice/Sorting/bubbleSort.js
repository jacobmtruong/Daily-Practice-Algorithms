let arr = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3]
            

// event On2

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) { // first loop running through all elements
        for (var j = i + 1; j < arr.length; j++) { // second loop running through the next index of i to compare
            if (arr[i] > arr[j]) { 
                let temp = arr[i] // set temp equal to the larger element
                arr[i] = arr[j] // switch with the smaller element to the front
                arr[j] = temp // switch to the larger element to the back
            }
        }
    }
    return arr
}

// event O

function bubbleSortO(arr) {
    for (var i = 0; i < arr.length - 1; i++) { // using single loop go through all elements
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i] 
            arr[i] = arr[i + 1] // swap elements
            arr[i + 1] = temp
        }
    }
    return arr
}

console.log(bubbleSort(arr));
console.log(bubbleSortO(arr));
